'use client';

import { pageLinkKeys, pageLinks } from '@/configs/links';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';


export default function TeamPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace(pageLinks[pageLinkKeys.HOME].href)
  }, [router])

  return null;
}
