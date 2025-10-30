'use client';

import { pageLinkKeys, pageLinks } from '@/configs/links'
import { cn } from '@/utils/cn'
import { useRouter } from 'next/navigation'

const config = {
  breadcrumbs: [
    {
      title: 'Главная Страница',
      href: pageLinks[pageLinkKeys.HOME].href
    },
    {
      title: 'Наши услуги',
      href: pageLinks[pageLinkKeys.HOME].href
    },
    {
      title: 'Инвестиции в нежвижимость',
      href: null
    }
  ]
}

export function Breadcrumbs() {
  const router = useRouter()

  return (
    <ul
      className={cn(
        'h-[60px] px-[18px] md:px-[32px]',
        '1_5xl:max-w-[1440px] 1_5xl:mx-auto',
        'flex items-center'
      )}
    >
      <div
        className={cn(
          'flex flex-wrap items-center gap-y-2',
          // 'bg-red-500'
        )}
      >
        {config.breadcrumbs.map((breadcrumb, idx, arr) => {
          const isLast = idx == arr.length - 1;
          return (
            <>
              <li
                key={breadcrumb.title}
                onClick={() => {
                  if (!breadcrumb.href) return;
                  router.push(breadcrumb.href)
                }}
                className={cn(
                  'whitespace-nowrap text-custom-brand-000 font-medium',
                  !isLast && cn(
                    'transition-all duration-150 cursor-pointer',
                    'hover:opacity-80'
                  ),
                  'text-[12px] leading-[12px]',
                  'sm:text-[16px] sm:leading-[16px]',
                )}
              >
                {breadcrumb.title}
              </li>

              {!isLast && (
                <div
                  className={cn(
                    'bg-custom-brand-000 rounded-full',
                    'w-1 h-1 mx-2',
                    'sm:w-1.5 sm:h-1.5 mx-3 mt-[1px]',
                  )}
                />
              )}
            </>
          )
        })}
      </div>

    </ul>
  )
}