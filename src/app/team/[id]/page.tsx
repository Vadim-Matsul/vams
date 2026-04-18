import { team_config } from '@/configs/team-config';
import type { Metadata } from 'next';
import TeamPersonClient from './TeamPersonClient';

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return team_config.map(({ key }) => ({ id: key }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const person = team_config.find(({ key }) => key === id);
  if (!person) return {};
  return {
    title: `${person.name} — ${person.role} | VAMS SMART REALTY`,
    description: person.desc,
    alternates: { canonical: `/team/${id}` },
    openGraph: {
      url: `/team/${id}`,
      images: [{ url: person.img, width: 400, height: 400, alt: person.name }],
    },
  };
}

export default function TeamPersonPage() {
  return <TeamPersonClient />;
}
