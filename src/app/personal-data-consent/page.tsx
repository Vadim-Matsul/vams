import type { Metadata } from 'next';
import PageContent from './PageContent';

export const metadata: Metadata = {
  title: 'Согласие на обработку персональных данных | VAMS SMART REALTY',
  description: 'Согласие на обработку персональных данных пользователей сайта VAMS SMART REALTY.',
  alternates: { canonical: '/personal-data-consent' },
  openGraph: { url: '/personal-data-consent' },
};

export default function PersonalDataConsentPage() {
  return <PageContent />;
}
