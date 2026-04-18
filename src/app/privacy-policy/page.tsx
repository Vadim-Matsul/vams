import type { Metadata } from 'next';
import PageContent from './PageContent';

export const metadata: Metadata = {
  title: 'Политика конфиденциальности | VAMS SMART REALTY',
  description: 'Политика конфиденциальности и обработки персональных данных агентства VAMS SMART REALTY.',
  alternates: { canonical: '/privacy-policy' },
  openGraph: { url: '/privacy-policy' },
};

export default function PrivacyPolicyPage() {
  return <PageContent />;
}
