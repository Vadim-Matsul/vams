// Получение AMO_AUTH_CODE по /api/amo/auth для начальной авторизации
import { NextRequest, NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import { promises as fs } from 'fs';
import path from 'path';
import { amoVars } from '@/lib/amoreal';

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
  console.log(amoVars.envs);
  try {
    console.log(1);
    const response = await fetch(`https://${amoVars.envs.base_domain}/oauth2/access_token`, {
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
    console.log(2, response);

    // if (!response.ok) {
    //   const errorData = await response.json();
    //   return NextResponse.json({ error: errorData }, { status: response.status });
    // }

    // const data = await response.json();

    // // Сохраняем токены во временный файл (или БД)
    // console.log('Tokens received:', data);

    // return NextResponse.json(data);
  } catch (error) {
    console.error('Token exchange error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const isAlreadyLogedIn = await tokensJSONExist(tokensPath);
    if (isAlreadyLogedIn) {
      throw new Error('Файл amo json создан, был логИн');
    }

    const { searchParams } = new URL(req.url);
    const auth_code = searchParams.get('code');
    if (!auth_code) {
      throw new Error('Authorization code not found');
    }
    const amoTokens = await getAMOTokens(auth_code);

    // def502006811cdc0c93855e69c3e6958dcedacbe38b662c143be20ceb0dc31e45c2cf56e6240c9894f5bf0fadd9ab049449cf55b3970587775f98c9b94554b22de171a76bf9e4614334b45904b15cff1e03885cfa6f2da168707263526a0b83bbc04a123dbf1fb4a037b4c780af6239b6b2e46e498c514a2c26239b724715977f2d16466ab1ef44ece9ba37654a786f39719704fd818f4e1d77d9aefa02f2583e4771ed5665bf7b17d999e21515e732f2d8e63e212d5733ec98a652ab1f024b2eee738f86587ba9e33bd3c0ca4fa526b1bb43ead51f62eb22e321e1c4531fb4dd32c4a99e2a59962b7e7d854f21f7884b66c6a89e38b4e9ac22009bffff1ae4f3d73ad3ef29916baa9da86ffbf8c134dec5dd27d421ba45641a5b471aafee72fde73f0132161224c5d4093bc4a0ea70fbac24664f0673747c8ad785611a977e0a646a5b55cc160fca76e527574fb780bdd3038f263019ef42d407819dbe7f3ee096363d698ee8f1453171b7a6362cedcc77a4f968c5a53e4d2ab310296c25f0cc2d5a717650e036e038b90a90bb830c4ca327d699441f53c2bf7777dc1a260cf6f15a8032f2d1b81b31276829e417224ab7e3f6d5dcab84dce93669c6434721d1984bdb41449169454b5db715eb9cf0eafe60fbf2157aadac4cf0d538d856b51a8994a0cb873b837b8a74e46116a8d0dee1875b76bc2fabbb68eba34d167b3be7e74737416ef5274037128674fccf7a1de4408ef64bd604a
    // Авторизации до этого не было, code есть
  } catch (err) {
    console.log('[ERROR] /api/amo/auth', err);
    return NextResponse.json({ message: '[ERROR] Authorization code error', err }, { status: 500 });
  }
}

// export async function GET(req: NextRequest) {
//   try {
//     console.log('GET /api/amo/auth');
// const { searchParams } = new URL(req.url);
// const code = searchParams.get('code');

//     console.log('GET /api/amo/auth code', code);

//     if (!code) {
//       return NextResponse.json({ error: 'Authorization code not found' }, { status: 400 });
//     }

//     // Путь для хранения кода локально
//     const filePath = path.join(process.cwd(), 'amo_tokens.json');

//     // Сохраняем код в JSON (позже здесь можно хранить и токены)
//     await writeFile(filePath, JSON.stringify({ auth_code: code }, null, 2));

//     console.log('AMO_AUTH_CODE:', code);

//     return NextResponse.json({
//       message: 'Authorization code received successfully',
//       auth_code: code,
//     });
//   } catch (err) {
//     console.log('GET /api/amo/auth error', err);
//     return NextResponse.json({
//       message: 'Authorization code error',
//       auth_code: null,
//     });
//   }
// }
