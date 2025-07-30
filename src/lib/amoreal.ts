import { promises as fs } from 'fs';
import path from 'path';
import z from 'zod';

export const amoVars = {
  tokensDir: path.join(process.cwd(), '/tmp/tokens'),
  tokensFileName: 'amo_tokens.json',
  tokenSchema: z.object({
    auth_code: z.string(),
    access: z.string(),
    refresh: z.string(),
    expire: z.number(),
    server_time: z.number(),
  }),
  envs: {
    client_id: process.env.AMOCRM_CLIENT_ID,
    client_secret: process.env.AMOCRM_CLIENT_SECRET,
    redirect_url: process.env.AMOCRM_REDIRECT_URL,
    base_domain: process.env.AMOCRM_BASE_DOMAIN,
    api_url: `https://${process.env.AMOCRM_BASE_DOMAIN}/api/v4`,
  },
};

const tokensPath = path.join(amoVars.tokensDir, amoVars.tokensFileName);

export async function getAmoTokens(filePath: string) {
  try {
    await fs.access(filePath);
    const data = await fs.readFile(filePath, 'utf-8');
    return amoVars.tokenSchema.parse(JSON.parse(data));
  } catch (err) {
    console.log('Файл не найден или ошибка чтения:', err);
    return null;
  }
}

async function updateTokens(expireTokensData: z.infer<typeof amoVars.tokenSchema>) {
  const url = `${amoVars.envs.api_url}/oauth2/access_token`;
  const body = {
    client_id: amoVars.envs.client_id,
    client_secret: amoVars.envs.client_secret,
    grant_type: 'refresh_token',
    refresh_token: expireTokensData.refresh,
    redirect_uri: amoVars.envs.redirect_url,
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(`Failed to refresh token: ${JSON.stringify(errorData)}`);
  }

  const data = await response.json();

  // Если файла нет — создаём его
  const newTokensData: z.infer<typeof amoVars.tokenSchema> = {
    auth_code: expireTokensData.auth_code,
    access: data.access_token,
    refresh: data.refresh_token,
    expire: data.expires_in,
    server_time: data.server_time,
  };
  await fs.writeFile(tokensPath, JSON.stringify(amoVars.tokenSchema.parse(newTokensData), null, 2));

  return { newTokensData };
}

export async function amoRequest(endpoint: string, method = 'GET', body?: any) {
  console.log('amoRequest');
  try {
    const tokensData = await getAmoTokens(tokensPath);

    const isUnAuth = tokensData === null;
    if (isUnAuth) {
      throw new Error(`AmoCRM API error: нужна авторизация`);
    }

    const url = `${amoVars.envs.api_url}${endpoint}`;
    const getInit = (access_token: string) => ({
      method,
      headers: {
        Authorization: `Bearer ${access_token}`,
        'Content-Type': 'application/json',
      },
      body: body ? JSON.stringify(body) : undefined,
    });

    const response = await fetch(url, getInit(tokensData.access));

    const shouldUpdateAccessToken = response.status === 401;
    if (shouldUpdateAccessToken) {
      const { newTokensData } = await updateTokens(tokensData);
      const response = await fetch(url, getInit(newTokensData.access));
      if (!response.ok) throw new Error('ошибка запроса после обновления токена');
      return response.json();
    }

    if (!response.ok) throw new Error('ошибка запроса');
    return response.json();
  } catch (err) {
    throw new Error(`Ошибка запроса: ${err}`);
  }
}
