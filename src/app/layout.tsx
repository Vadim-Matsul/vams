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
import { JsonLd } from '@/components/JsonLd';

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

const SITE_URL = 'https://vamsrealty.ru';
const OG_IMAGE = '/images/dark_town.jpg';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Продажа и покупка элитной недвижимости - VAMS SMART REALTY. Агентство премиальной недвижимости с инвестиционным подходом',
  description: 'Агентство VAMS SMART REALTY — премиальная и элитная недвижимость в Москве. Продажа и покупка квартир, апартаментов и инвестиционных объектов. Smart-аналитика, доступ к закрытым предложениям, полный сервис и юридическое сопровождение.',
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    siteName: 'VAMS SMART REALTY',
    title: 'VAMS SMART REALTY — Агентство премиальной недвижимости в Москве',
    description: 'Премиальная и элитная недвижимость в Москве. Smart-аналитика, доступ к закрытым предложениям, полный сервис и юридическое сопровождение.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'VAMS SMART REALTY' }],
  },
};

const schemaOrg = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'VAMS SMART REALTY',
      url: SITE_URL,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/images/logo_vsr.png` },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+7-967-217-22-97',
        contactType: 'customer service',
        availableLanguage: 'Russian',
      },
      sameAs: ['https://t.me/vamssmartrealty', 'https://www.instagram.com/vsr.smartrealty'],
    },
    {
      '@type': ['LocalBusiness', 'RealEstateAgent'],
      '@id': `${SITE_URL}/#localbusiness`,
      name: 'VAMS SMART REALTY',
      url: SITE_URL,
      telephone: '+7-967-217-22-97',
      email: 'info@vamsrealty.ru',
      image: `${SITE_URL}${OG_IMAGE}`,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Проектируемый пр. № 4062, д.6, стр.16, оф.3.15',
        addressLocality: 'Москва',
        addressCountry: 'RU',
      },
      priceRange: '₽₽₽₽',
      description: 'Агентство премиальной и элитной недвижимости в Москве. Продажа, покупка, инвестиции, юридическое сопровождение.',
    },
  ],
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
        <JsonLd data={schemaOrg} />
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
