'use client';
import { pageLinkKeys, pageLinks } from '@/configs/links';
import { useRouter } from 'next/navigation';


export default function ServicesPage() {
  const router = useRouter();
  router.replace(pageLinks[pageLinkKeys.HOME].href)

  return null;
}