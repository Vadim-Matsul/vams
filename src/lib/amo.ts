import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';

const TOKENS_PATH = path.resolve(process.cwd(), 'tokens/amocrm.json');

const AMO_API_URL = 'https://api-b.amocrm.ru';
const AMO_CLIENT_ID = process.env.AMO_CLIENT_ID!;
const AMO_CLIENT_SECRET = process.env.AMO_CLIENT_SECRET!;
const AMO_REDIRECT_URI = process.env.AMO_REDIRECT_URI!;

const AMO_AUTH_CODE = process.env.AMO_AUTH_CODE!; // первый код авторизации
const AMO_BASE_DOMAIN = process.env.AMO_BASE_DOMAIN!; // например, example.amocrm.ru

function readTokens() {
  return JSON.parse(fs.readFileSync(TOKENS_PATH, 'utf-8'));
}

function writeTokens(tokens: any) {
  fs.writeFileSync(TOKENS_PATH, JSON.stringify(tokens, null, 2));
}

async function refreshToken() {
  const tokens = readTokens();

  const response = await fetch(`https://${AMO_BASE_DOMAIN}/oauth2/access_token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      client_id: AMO_CLIENT_ID,
      client_secret: AMO_CLIENT_SECRET,
      grant_type: 'refresh_token',
      refresh_token: tokens.refresh_token,
      redirect_uri: AMO_REDIRECT_URI,
    }),
  });

  const data = await response.json();
  // @ts-expect-error "___"
  if (!data.access_token) throw new Error('Не удалось обновить токен AmoCRM');

  writeTokens({
    // @ts-expect-error "___"
    access_token: data.access_token,
    // @ts-expect-error "___"
    refresh_token: data.refresh_token,
    // @ts-expect-error "___"
    expires_at: Date.now() + data.expires_in * 1000,
  });

  // @ts-expect-error "___"
  return data.access_token;
}

async function getAccessToken() {
  const tokens = readTokens();
  if (!tokens.access_token || Date.now() >= tokens.expires_at) {
    return await refreshToken();
  }
  return tokens.access_token;
}

async function amoRequest(endpoint: string, method = 'GET', body?: any) {
  const token = await getAccessToken();

  const response = await fetch(`${AMO_API_URL}${endpoint}`, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  return response.json();
}
