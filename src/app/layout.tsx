import type { Metadata } from 'next';
import { Unbounded, Geist } from 'next/font/google';
import '../style/globals.css';
import 'normalize.css'
import { cn } from '@/utils/cn';

const unboundedFont = Unbounded({
  variable: '--font-unbounded',
  subsets: ['cyrillic', 'cyrillic-ext', 'latin', 'latin-ext'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
});

const geistFont = Geist({
  variable: '--font-geist',
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'VAMS',
  description: 'description',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          unboundedFont.variable,
          geistFont.variable,
          'antialiased bg-custom-white-100'
        )}
      >
        {children}
      </body>
    </html>
  );
}
