'use client';

import { cn } from '@/utils/cn'
import { LogoIcon } from '../icons/LogoIcon'
import { links, pageLinkKeys, pageLinks } from '@/configs/links'
import { InstagramIcon, TelegramIcon, TelegramV2Icon, WhatsAppIcon } from '../icons'
import { useLayoutEffect, useState } from 'react'
import Link from 'next/link';
import { Drawer } from 'vaul';
import { screensData } from '@/configs/screens';
import { homeBlockIDs } from '@/configs/homeBlockIds';
import { LiquidGlass } from '@/ui/LiquidGlass';
import { motion, AnimatePresence } from "framer-motion";
import { FadeContent } from '@/bits/FadeContent';
import { SplitText } from '@/bits/SplitText';
import { mittEmitter, MittEventBusEvents } from '@/ui/eventBus';

type Props = {}

const options = {
  delay: 30,
  duration: 0.5,
  ease: "power3.out",
  splitType: "chars",
  from: { opacity: 0, y: 20 },
  to: { opacity: 1, y: 0 },
  threshold: 0,
  rootMargin: "0px",
  textAlign: "center",
} as const;

const includePages = [
  pageLinkKeys.ABOUT,
  pageLinkKeys.AGENCY,
  pageLinkKeys.CONTACTS,
];

const pageLinksArr = Object
  .values(pageLinks)
  .filter(link => includePages.includes(link.key));

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

  const reqConsultation = () => {
    mittEmitter.emit(MittEventBusEvents.OPEN_STEPPERBLOCK_STEPS)

    setTimeout(() => {
      const contactFormElement = document.getElementById(homeBlockIDs.CONTACT_FORM);
      if (contactFormElement) {
        window.scrollBy({
          top: contactFormElement.getBoundingClientRect().top - 110,
          behavior: 'smooth'
        })
      }
    }, 400)
  }

  const scrollToSection = (key: typeof includePages[number]) => {
    switch (key) {
      case pageLinkKeys.ABOUT:
        const el = document.getElementById(homeBlockIDs.ABOUT);
        if (el) {
          window.scrollBy({
            top: el.getBoundingClientRect().top - 30,
            behavior: 'smooth'
          })
        }
        return;
      case pageLinkKeys.AGENCY:
        mittEmitter.emit(MittEventBusEvents.OPEN_STEPPERBLOCK_STEPS)

        setTimeout(() => {
          const el = document.getElementById(homeBlockIDs.TEAM);
          if (el) {
            window.scrollBy({
              top: el.getBoundingClientRect().top,
              behavior: 'smooth'
            })
          }
        }, 400)
        return;
      case pageLinkKeys.CONTACTS:
        mittEmitter.emit(MittEventBusEvents.OPEN_STEPPERBLOCK_STEPS)

        setTimeout(() => {
          const el = document.getElementById(homeBlockIDs.CONTACTS);
          if (el) {
            window.scrollBy({
              top: el.getBoundingClientRect().top,
              behavior: 'smooth'
            })
          }
        }, 300)
        return;
      default:
        console.warn(key + 'не обработан скролл')
        return;
    }
  }

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-[10]'
        )}
      >
        <section
          className='bg-[#163033] h-[28px] relative'
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
            'h-[52px] 1_5lg:h-[80px] rounded-b-xl overflow-hidden flex items-center backdrop-blur-[px]',
          )}
        >
          <LiquidGlass
            blur={10}
            displacementScale={300}
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
                    <button
                      onClick={() => scrollToSection(pageLink.key)}
                      key={pageLink.key}
                      className='text-custom-brand-200 leading-tight font-geist text-base font-medium cursor-pointer'
                    >
                      {pageLink.title}
                    </button>
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
                      href={links.telegram_bot.bot_href}
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
                    <div
                      className={cn(
                        'hidden 1_5lg:block',
                        'rounded-[90px] overflow-hidden',
                        'mx-auto transition-all',
                        'hover:scale-[.95] focus:scale-[.95]',
                        'w-[258px] h-[56px] min-h-[56px]'
                      )}
                    >
                      <button
                        // href={'#' + homeBlockIDs.CONTACT_FORM}
                        onClick={reqConsultation}
                        className={cn(
                          'bg-transparent text-custom-brand-100 cursor-pointer',
                          'w-full h-full rounded-[90px]',
                          'border-[1px] border-custom-brand-100',
                          'flex items-center justify-center',
                        )}
                      >
                        <p
                          className={cn(
                            'font-geist font-semibold leading-none',
                            'text-[16px]'
                          )}
                        >
                          Запросить консультацию
                        </p>
                      </button>
                    </div>

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
          </LiquidGlass>
        </section>
      </header>

      <Drawer.Root
        aria-describedby='навигация'
        direction='right'
        open={isOpen}
        onClose={() => setIsOpen(false)}
        disablePreventScroll
      >
        <Drawer.Overlay
          aria-describedby='навигация'
          onClick={() => setIsOpen(false)}
          className='absolute inset-0 z-[20] bg-white/5 backdrop-blur-[3px]'
        />
        <Drawer.Title
          aria-describedby='навигация'
        />

        <Drawer.Portal

          aria-describedby='навигация'
        >
          <Drawer.Content
            aria-describedby='навигация'
            style={{
              boxShadow: `
                -4px 0px 10px 0px rgba(53, 53, 53, 0.05),
                inset 0px 0px 14px 0px rgba(255, 255, 255, 0.35),
                inset 1px 3px 5px 0px rgba(255, 255, 255, 0.30),
                inset -1px -3px 3px 0px rgba(255, 255, 255, 0.10)
              `
            }}
            className={cn(
              'fixed z-[21] rounded-l-xl top-0 bottom-0 right-0 w-[max(min(270px,50vw), 210px)] bg-custom-white-100',
              'flex flex-col justify-between py-8'
            )}
          >
            <ul
              className='flex flex-col gap-7 pl-5'
            >
              <AnimatePresence>
                {isOpen && pageLinksArr.map((item, idx) => (
                  <motion.li
                    onClick={() => {
                      setIsOpen(false)
                      scrollToSection(item.key)
                    }}
                    key={item.key}
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 60 }}
                    transition={{ delay: idx * 0.2, type: "spring", stiffness: 400, damping: 30 }}
                    className='font-unbounded font-medium text-[20px] cursor-pointer'
                  >
                    <span className='text-custom-brand-200'>{item.title}</span>
                  </motion.li>
                ))}
              </AnimatePresence>
            </ul>

            <div
            // className='bg-red-500'
            >
              <div className='h-[44px] px-5 mb-8'>
                <button
                  // href={'#' + homeBlockIDs.CONTACT_FORM}
                  onClick={() => {
                    setIsOpen(false);
                    reqConsultation()
                  }}
                  className={cn(
                    'bg-transparent text-custom-brand-100 cursor-pointer',
                    'w-full h-full rounded-[90px]',
                    'border-[1px] border-custom-brand-100',
                    'flex items-center justify-center',
                  )}
                >
                  <p
                    className={cn(
                      'font-geist font-semibold leading-none',
                      'text-[16px]'
                    )}
                  >
                    Запросить консультацию
                  </p>
                </button>
              </div>

              <div
                className='w-full h-px bg-black/60'
              />

              <div
                className='flex flex-col gap-5 px-5 py-8'
              >
                <div
                  className={cn(
                    'flex flex-col gap-1.5',
                  )}
                >
                  <p
                    className={cn(
                      'font-geist text-custom-grey-300',
                      'text-[14px] leading-[130%]',
                    )}
                  >
                    Офис
                  </p>

                  <a
                    href={links.office_address.yandex_href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      'block w-fit font-unbounded text-custom-brand-200 uppercase font-bold',
                      'text-[16px] leading-[116%]',
                    )}
                  >
                    <SplitText
                      {...options}
                      duration={2}
                      textAlign='left'
                      text={links.office_address.location_el}
                    />
                  </a>
                </div>
                <div
                  className={cn(
                    'flex flex-col gap-1.5',
                  )}
                >
                  <p
                    className={cn(
                      'font-geist text-custom-grey-300',
                      'text-[14px] leading-[130%]',
                    )}
                  >
                    Телефон
                  </p>

                  <a
                    href={`tel:+${links.phone.num_number}`}
                    className={cn(
                      'block w-fit font-unbounded text-custom-brand-200 uppercase font-bold',
                      'text-[16px] leading-[116%]',
                    )}
                  >
                    <SplitText
                      {...options}
                      duration={2}
                      textAlign='left'
                      text={links.phone.str_number}
                    />
                  </a>
                </div>
                <div
                  className={cn(
                    'flex flex-col gap-1.5',
                  )}
                >
                  <p
                    className={cn(
                      'font-geist text-custom-grey-300',
                      'text-[14px] leading-[130%]',
                      'xl:text-[19px]'
                    )}
                  >
                    Email
                  </p>

                  <a
                    href={`mailto:${links.mail.email}`}
                    className={cn(
                      'block w-fit font-unbounded text-custom-brand-200 uppercase font-bold',
                      'text-[16px] leading-[116%]',
                    )}
                  >
                    <SplitText
                      {...options}
                      duration={2}
                      textAlign='left'
                      text={links.mail.email}
                    />
                  </a>
                </div>
              </div>

              <div className='flex items-center justify-between px-5'>
                <FadeContent
                  blur
                  duration={750}
                  threshold={0.7}
                  easing="ease-out"
                  className='relative w-fit h-fit'
                >
                  <a
                    href={links.telegram_bot.bot_href}
                    target="_blank"
                    rel="noopener noreferrer"
                    tabIndex={1}
                    className={cn(
                      'flex items-center justify-center text-custom-brand-200',
                      'hover:scale-[.95] focus:scale-[.95] hover:opacity-90 focus:opacity-90 transition-all',
                      'w-[58px] h-[58px]'
                    )}
                  >
                    <TelegramV2Icon
                      className='w-[38px] h-[38px]'
                    />
                  </a>
                </FadeContent>

                <FadeContent
                  blur
                  duration={1000}
                  threshold={0.7}
                  easing="ease-out"
                  className='relative w-fit h-fit'
                >
                  <a
                    href={links.whatsapp.contact_href}
                    target="_blank"
                    rel="noopener noreferrer"
                    tabIndex={1}
                    className={cn(
                      'flex items-center justify-center text-custom-brand-200',
                      'hover:scale-[.95] focus:scale-[.95] hover:opacity-90 focus:opacity-90 transition-all',
                      'w-[58px] h-[58px]'
                    )}
                  >
                    <WhatsAppIcon
                      className='w-[34px] h-[34px]'
                    />
                  </a>
                </FadeContent>

                <FadeContent
                  blur
                  duration={1250}
                  threshold={0.7}
                  easing="ease-out"
                  className='relative w-fit h-fit'
                >
                  <a
                    href={links.instagram.account_href}
                    target="_blank"
                    rel="noopener noreferrer"
                    tabIndex={1}
                    className={cn(
                      'flex items-center justify-center text-custom-brand-200',
                      'hover:scale-[.95] focus:scale-[.95] hover:opacity-90 focus:opacity-90 transition-all',
                      'w-[58px] h-[58px]'
                    )}
                  >
                    <InstagramIcon
                      className='w-[33px] h-[33px]'
                    />
                  </a>
                </FadeContent>
              </div>

            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </>
  )
}
