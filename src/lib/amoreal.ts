import { promises as fs } from 'fs';
import path from 'path';
import z from 'zod';

export const amoVars = {
  tokensDir: '/tmp/tokens',
  tokensFileName: 'amo_tokens.json',
  tokenSchema: z.object({
    auth_code: z.string(),
    access: z.string(),
    refresh: z.string(),
    expire: z.number(),
  }),
  envs: {
    client_id: process.env.AMOCRM_CLIENT_ID,
    client_secret: process.env.AMOCRM_CLIENT_SECRET,
    redirect_url: process.env.AMOCRM_REDIRECT_URL,
    base_domain: process.env.AMOCRM_BASE_DOMAIN,
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

export async function amoRequest(endpoint: string, method = 'GET', body?: any) {
  const tokens = await getAmoTokens(tokensPath);

  const isUnAuth = tokens === null;
  if (isUnAuth) {
    throw new Error(`AmoCRM API error: нужна авторизация`);
  }

  console.log({ tokens });
}
