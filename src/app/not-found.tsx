'use client';

import { StarBorder } from '@/bits/animations/StarBorder/StarBorder';
import { pageLinkKeys, pageLinks } from '@/configs/links';
import { cn } from '@/utils/cn';
import { useRouter } from 'next/navigation';


export default function NotFound() {
  const router = useRouter();
  function goToHome() {
    router.replace(pageLinks[pageLinkKeys.HOME].href)
  }

  return (
    <section className='grid items-center h-screen'>
      <div className='flex flex-col gap-8'>
        <div className='flex items-center flex-col justify-center'>
          <h2 className='font-bold text-[46px] leading-[46px] font-unbounded'>404</h2>
          <p className='font-unbounded font-medium text-[24px] leading-[24px]'>Страница не найдена</p>
        </div>

        <div
          className={cn(
            'rounded-[90px] overflow-hidden',
            'mx-auto transition-all',
            'hover:scale-[.95] focus:scale-[.95]',
            'w-[288px] h-[44px]'
          )}
        >
          <StarBorder
            as="button"
            onClick={goToHome}
            color="var(--color-custom-brand-200)"
            speed="3s"
            thickness={1.5}
            className={cn(
              'cursor-pointer'
            )}
          >
            <div
              className={cn(
                'bg-custom-white-100 text-custom-brand-100',
                'w-full h-full rounded-[90px]',
                'border-[1px] border-custom-brand-100',
                'flex items-center justify-center',
                'gap-2.5'
              )}
            >
              <p
                className={cn(
                  'font-geist font-semibold leading-none',
                  'text-[16px]'
                )}
              >
                Вернуться на главную
              </p>
            </div>
          </StarBorder>
        </div>
      </div>

    </section>
  );
}
