'use client';

import { cn } from '@/utils/cn'
import { LogoIcon } from '../icons/LogoIcon'
import { links, pageLinkKeys, pageLinks } from '@/configs/links'
import { TelegramIcon, WhatsAppIcon } from '../icons'
import { useLayoutEffect, useState } from 'react'
import Link from 'next/link';
import { Drawer } from 'vaul';
import { screensData } from '@/configs/screens';

type Props = {}

const excludePages = [pageLinkKeys.HOME];
const pageLinksArr = Object
  .values(pageLinks)
  .filter(link => !excludePages.includes(link.key));

export function Header({ }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  useLayoutEffect(() => {
    /**
     * Эффект следит за закрытием Drawer
     * при экране > md
     */

    const recalculate = () => {
      if (!isOpen) return;
      const is1180Width = window.innerWidth >= screensData['1_5lg'].num;
      setIsOpen(!is1180Width)
    }

    const resizeObserver = new ResizeObserver(recalculate)
    resizeObserver.observe(document.body)

    return () => {
      resizeObserver.disconnect()
    }
  }, [isOpen])

  return (
    <>
      <header
        className={cn(
          'sticky top-0'
        )}
      >
        <section
          className='bg-[#163033] h-[28px]'
        >
          <div
            className={cn(
              'h-full flex items-center justify-center',
              'max-w-[var(--breakpoint-1_5xl)] 1_5xl:mx-auto'
            )}
          >
            <p className='font-semibold text-custom-white-100 font-geist text-[14px]'>
              Подпишитесь на Telegram
              <a
                href={links.telegram.channel_href}
                target="_blank"
                rel="noopener noreferrer"

              >
                &nbsp;&#64;{links.telegram.channel_name}
              </a>
            </p>
          </div>
        </section>

        <section
          style={{
            boxShadow: `0px 3px 8px 3px rgba(53, 53, 53, 0.05), inset 0px 2px 10px 5px rgba(53, 53, 53, 0.05), inset 0px 0px 14px 0px rgba(255, 255, 255, 0.35), inset 1px 3px 5px 0px rgba(255, 255, 255, 0.30), inset -1px -3px 3px 0px rgba(255, 255, 255, 0.10)`
          }}
          className={cn(
            'h-[52px] bg-white/5 backdrop-blur-[5px] rounded-b-xl flex items-center',
          )}
        >
          <div
            className={cn(
              'max-w-[var(--breakpoint-1_5xl)] 1_5xl:mx-auto',
              'flex items-center justify-between px-[18px] md:px-8 grow'
            )}
          >
            <Link
              href='/'
            >
              <LogoIcon
                className={cn(
                  'text-custom-brand-200',
                  'w-[103px] h-4 md:w-[135px] md:h-[21px]',
                )}
              />
            </Link>

            <div className='hidden 1_5lg:flex gap-6 items-center '>
              {pageLinksArr.map(pageLink => {

                return (
                  <Link
                    href={pageLink.href}
                    key={pageLink.key}
                    className='text-custom-brand_200 leading-tight font-geist text-base font-medium'
                  >
                    {pageLink.title}
                  </Link>
                )
              })}
            </div>

            <div className='flex items-center 1_5xl:gap-6'>
              <a
                href={`tel:+${links.phone.num_number}`}
                className='hidden 1_5xl:inline font-medium font-geist text-base leading-[19px]'
              >
                {links.phone.str_number}
              </a>

              <div className='flex items-center gap-1.5 md:gap-3 1_5xl:gap-6'>
                <div className='flex items-center gap-1.5 md:gap-3 1_5xl:gap-0'>
                  <a
                    href={links.telegram.channel_href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='flex items-center justify-center w-9 h-9 text-custom-brand-200'
                  >
                    <TelegramIcon className='w-[20px] h-4' />
                  </a>

                  <a
                    href={links.whatsapp.contact_href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='flex items-center justify-center w-9 h-9 text-custom-brand-200'
                  >
                    <WhatsAppIcon className='w-[21px] h-[21px]' />
                  </a>
                </div>

                <div>
                  <button
                    className={cn(
                      'hidden 1_5lg:block'
                    )}
                  >
                    Запросить консультацию
                  </button>

                  <div className='mt-0.5'>
                    <button
                      onClick={() => setIsOpen(!isOpen)}
                      className='1_5lg:hidden w-[28px] aspect-square relative cursor-pointer'
                    >
                      <div
                        className={cn(
                          'absolute transition-all',
                          'w-6 h-0.5 bg-custom-brand-200',
                          isOpen
                            ? 'rotate-[45deg] top-[13px] left-[1.5px]'
                            : 'top-[9px] left-[1.5px]'
                        )}
                      />
                      <div
                        className={cn(
                          'absolute transition-all',
                          'w-6 h-0.5 bg-custom-brand-200',
                          isOpen
                            ? '-rotate-[45deg] bottom-[13px] left-[1.5px]'
                            : 'bottom-[9px] left-[1.5px]'
                        )}
                      />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </header>

      <Drawer.Root
        direction='right'
        open={isOpen}
        onClose={() => setIsOpen(false)}
        disablePreventScroll
      >
        <Drawer.Overlay
          onClick={() => setIsOpen(false)}
          className='absolute inset-0 z-[20] bg-white/5 backdrop-blur-[3px]'
        />
        <Drawer.Title />

        <Drawer.Portal>
          <Drawer.Content
            style={{
              boxShadow: `
                -4px 0px 10px 0px rgba(53, 53, 53, 0.05),
                inset 0px 0px 14px 0px rgba(255, 255, 255, 0.35),
                inset 1px 3px 5px 0px rgba(255, 255, 255, 0.30),
                inset -1px -3px 3px 0px rgba(255, 255, 255, 0.10)
              `
            }}
            className='fixed z-[21] rounded-l-xl top-0 bottom-0 right-0 w-[max(min(270px,50vw),190px)] bg-custom-white-100'
          >
            <>
              <p>links</p>
            </>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root >
    </>

  )
}