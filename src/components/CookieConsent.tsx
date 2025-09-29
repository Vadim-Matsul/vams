'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { cn } from '@/utils/cn';
import { pageLinkKeys, pageLinks } from '@/configs/links';
import { mittEmitter, MittEventBusEvents } from '@/ui/eventBus';

export const cookieConf = {
  cookie_accept_key: 'cookie_consent',
  cookie_accept_value: 'accepted',
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(cookieConf.cookie_accept_key);
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem(cookieConf.cookie_accept_key, cookieConf.cookie_accept_value);
    setVisible(false);

    mittEmitter.emit(MittEventBusEvents.ACCEPT_COOKIE)
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-custom-brand-200 text-white p-4 1_5xl:p-6 1_5xl:px-8 shadow-lg">
      <div className={cn(
        "flex flex-col gap-5",
        'md:flex-row md:items-center md:justify-between',
        '1_5xl:max-w-[1440px] 1_5xl:mx-auto',

      )}>
        <p className="text-sm leading-snug xl:text-[18px] xl:leading-[22px]">
          Продолжая использовать наш сайт, вы даете согласие на обработку файлов Cookies и других пользовательских данных, в соответствии с&nbsp;
          <a
            href={pageLinks[pageLinkKeys.PRIVACY_POLICY].href}
            target='_blank'
            className='underline'
          >
            Политикой конфиденциальности
          </a>
        </p>

        <button
          onClick={acceptCookies}
          className={cn(
            'bg-transparent text-custom-white-200 cursor-pointer',
            'w-full rounded-[90px]',
            'border-[1px] border-custom-white-200',
            'flex items-center justify-center',
            'h-[42px]',
            'md:min-w-[320px] md:max-w-[320px]',
            'xl:min-w-[450px] xl:max-w-[450px]',
          )}
        >
          <p
            className={cn(
              'font-geist font-semibold leading-none',
              'text-[16px]'
            )}
          >
            Согласен
          </p>
        </button>
      </div>
    </div>
  );
}
