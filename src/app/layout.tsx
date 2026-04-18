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
import { YandexAnal } from '@/components/YandexAnal';
import { GoogleAnal } from '@/components/GoogleAnal';
import { CookieConsent } from '@/components/CookieConsent';

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
  title: 'Продажа и покупка элитной недвижимости - VAMS SMART REALTY. Агентство премиальной недвижимости с инвестиционным подходом',
  description: 'Агентство VAMS SMART REALTY — премиальная и элитная недвижимость в Москве. Продажа и покупка квартир, апартаментов и инвестиционных объектов. Smart-аналитика, доступ к закрытым предложениям, полный сервис и юридическое сопровождение.',
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
    <html lang="ru">
      <head>
        <YandexAnal />
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

        <CookieConsent />
        <GoogleAnal />
      </body>
    </html>
  );
}
