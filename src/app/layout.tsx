/* eslint-disable @next/next/no-img-element */
import type { Metadata } from 'next';
import { Unbounded, Geist } from 'next/font/google';
import 'swiper/css';
import '../style/globals.css';
import 'normalize.css'
import { cn } from '@/utils/cn';
import { Providers } from './providers';
import { GoogleAnalytics } from '@next/third-parties/google';
import Script from 'next/script';

const unboundedFont = Unbounded({
  variable: '--font-unbounded',
  subsets: ['cyrillic', 'latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  preload: true,
});

const geistFont = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  preload: true,
});

export const metadata: Metadata = {
  title: 'VAMS',
  description: 'Эксклюзивные объекты элитной недвижимости в Москве. Доступные условия покупки: ипотека, рассрочка от застройщика. Персональный подбор от экспертов рынка.',
};

const NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID = 'G-B7JRBJZ1ZV';
const NEXT_PUBLIC_YM_COUNTER_ID = '104184672';
const NEXT_PUBLIC_YM_COUNTER_ID_2 = '104182025';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="yandex-metrika"
          strategy="lazyOnload"
        >
          {`
            (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],
                k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(${NEXT_PUBLIC_YM_COUNTER_ID}, "init", {
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true,
                webvisor:true
            });
            console.log("✅ Yandex.Metrika 1 подключен");

            ym(${NEXT_PUBLIC_YM_COUNTER_ID_2}, "init", {
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true,
                webvisor:true
            });
            console.log("✅ Yandex.Metrika 2 подключен");
          `}
        </Script>
        <noscript>
          <div className='font-medium'>
            <img
              src={`https://mc.yandex.ru/watch/${NEXT_PUBLIC_YM_COUNTER_ID}`}
              style={{ position: 'absolute', left: '-9999px' }}
              alt=""
            />
            <img
              src={`https://mc.yandex.ru/watch/${NEXT_PUBLIC_YM_COUNTER_ID_2}`}
              style={{ position: 'absolute', left: '-9999px' }}
              alt=""
            />
          </div>
        </noscript>
      </head>
      <body
        className={cn(
          unboundedFont.variable,
          geistFont.variable,
          'antialiased bg-custom-white-100'
        )}
      >
        <Providers>
          {children}
        </Providers>

        {NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID && (
          <>
            <GoogleAnalytics gaId={NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID} />
            <Script id="ga-log" strategy="lazyOnload">
              {`
                console.log("✅ Google Analytics подключен");
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
