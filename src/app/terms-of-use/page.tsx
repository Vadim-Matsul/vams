import type { Metadata } from 'next';
import PageContent from './PageContent';

export const metadata: Metadata = {
  title: 'Пользовательское соглашение | VAMS SMART REALTY',
  description: 'Пользовательское соглашение сайта VAMS SMART REALTY — условия использования сервиса.',
  alternates: { canonical: '/terms-of-use' },
  openGraph: { url: '/terms-of-use' },
};

export default function TermsOfUsePage() {
  return <PageContent />;
}
