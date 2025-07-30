// Получение AMO_AUTH_CODE по /api/amo/auth для начальной авторизации
import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import { amoVars } from '@/lib/amoreal';
import z from 'zod';
import { oauth2TokensSchema } from '@/lib/amoSchemas';

const tokensPath = path.join(amoVars.tokensDir, amoVars.tokensFileName);
async function tokensJSONExist(filePath: string) {
  try {
    await fs.access(filePath);
    return true;
  } catch (err) {
    return false;
  }
}

async function getAMOTokens(auth_code: string) {
  // Обмен кода авторизации на access token и refresh token
  try {
    const url = `https://${amoVars.envs.base_domain}/oauth2/access_token`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        client_id: amoVars.envs.client_id,
        client_secret: amoVars.envs.client_secret,
        grant_type: 'authorization_code',
        code: auth_code,
        redirect_uri: amoVars.envs.redirect_url,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return { error: errorData, tokens: null };
    }

    const tokensData = oauth2TokensSchema.parse(await response.json());
    return { error: null, tokens: tokensData };
  } catch (error) {
    console.error('Token exchange error:', error);
    return { error: 'Internal Server Error', tokens: null };
  }
}

async function createTokensFile(tokensData: z.infer<typeof oauth2TokensSchema>, auth_code: string) {
  console.log('Создание файла с токенами ', tokensPath);
  try {
    // Проверяем, существует ли папка
    await fs.mkdir(amoVars.tokensDir, { recursive: true });

    // Создаем файл json, если его нет
    try {
      await fs.access(tokensPath);
      console.log('Файл уже существует:', tokensPath);
    } catch {
      // Если файла нет — создаём его
      const initialData: z.infer<typeof amoVars.tokenSchema> = {
        auth_code,
        access: tokensData.access_token,
        refresh: tokensData.refresh_token,
        expire: tokensData.expires_in,
        server_time: tokensData.server_time,
      };
      await fs.writeFile(tokensPath, JSON.stringify(amoVars.tokenSchema.parse(initialData), null, 2));
      console.log('Файл создан:', tokensPath);
    }

    return true;
  } catch (err) {
    console.error('Ошибка при создании файла:', err);
    return false;
  }
}

export async function GET(req: NextRequest) {
  console.log('Начальная запись токенов', process.cwd());
  try {
    const isAlreadyLogedIn = await tokensJSONExist(tokensPath);
    if (isAlreadyLogedIn) {
      throw new Error('Файл amo json создан, был логИн');
    }

    const { searchParams } = new URL(req.url);
    const auth_code = searchParams.get('code')!;
    if (!auth_code) {
      throw new Error('Authorization code not found');
    }

    // Авторизации до этого не было, code есть
    const amoTokens = await getAMOTokens(auth_code);
    if (amoTokens.tokens === null) {
      throw new Error(`Ошибка Обмена кода авторизации на access token и refresh token ${amoTokens.error}`);
    }

    const isCreated = await createTokensFile(amoTokens.tokens, auth_code);
    if (!isCreated) {
      throw new Error('Ошибка создания файла с токенами');
    }

    return NextResponse.json({ message: 'Начальные токены записаны' }, { status: 200 });
  } catch (err) {
    console.log('[ERROR] /api/amo/auth', err);
    return NextResponse.json({ message: '[ERROR] Authorization code error', err }, { status: 500 });
  }
}
