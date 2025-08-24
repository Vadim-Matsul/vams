'use client';
import { team_config } from '@/app/home/TeamBlock';
import { BlurText } from '@/bits/BlurText';
import { FadeContent } from '@/bits/FadeContent';
import { ArrowRightIcon, WhatsAppIcon } from '@/components/icons';
import { links, pageLinkKeys, pageLinks } from '@/configs/links';
import { cn } from '@/utils/cn';
import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image';
import { useParams, usePathname, useRouter } from 'next/navigation'
import { } from 'next/router';
import { use, useLayoutEffect, useState } from 'react'

type Props = {}

export default function TeamPersonPage({ }: Props) {
  const { id } = useParams()
  const pathname = usePathname()
  const router = useRouter()
  const [isActive, setIsActive] = useState(false);

  useLayoutEffect(() => {
    const isTeamPersonExist = pageLinks[pageLinkKeys.TEAM_PERSON].is(pathname);
    if (!isTeamPersonExist) {
      router.replace(pageLinks[pageLinkKeys.HOME].href);
      return;
    }
  }, [router, pathname])

  const person = team_config.find(({ key }) => key === id);
  if (!person) {
    return null;
  }


  return (
    <section className='min-h-screen flex flex-col justify-between'>
      <div
        className={cn(
          'max-w-[var(--breakpoint-1_5xl)] 1_5xl:mx-auto 1_5xl:w-[1000px] grow',
          'px-4 sm:px-6'
        )}
      >
        <div className='mt-6'>
          <button
            onClick={(evt) => {
              evt.preventDefault();
              router.push(pageLinks[pageLinkKeys.HOME].href);
            }}
            className={cn(
              'flex items-center gap-2 cursor-pointer',
              'hover:scale-95 focus:scale-95 transition-all',
            )}
          >
            <ArrowRightIcon className='w-7 h-7 rotate-180' />
            <p className='font-unbounded text-[18px] leading-none'>На главную</p>
          </button>
        </div>

        <div className='mt-16 flex flex-col gap-6'>
          <FadeContent
            blur={true}
            duration={500}
            easing="ease-out"
            threshold={.7}
            initialOpacity={0}
            className={cn(
              'relative',
              isActive ? 'z-[3]' : 'z-[1]'
            )}
          >
            <li
              onMouseMove={() => setIsActive(true)}
              onMouseLeave={() => setIsActive(false)}
              onFocus={() => setIsActive(true)}
              onBlur={() => setIsActive(false)}
              tabIndex={1}
              className={cn(
                'relative rounded-[8px] overflow-hidden mx-auto',
                'hover:scale-[1.04] transition-all focus:scale-[1.04]',
                'w-[340px] h-[340px]',
                'md:w-[400px] md:h-[400px]'
              )}
            >
              <div
                className={cn(
                  'flex items-end justify-center',
                  'absolute left-0 right-0 bottom-0 z-[2]',
                  'h-[200px]'
                )}
              >
                <section
                  className='absolute inset-0 z-[1]'
                >
                  <div
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-[248px] bg-gradient-to-t from-black/40 to-transparent z-[2]"
                  />

                  <div
                    className='absolute inset-0 bg-gradient-to-b from-transparent to-black/15'
                  />

                  <article
                    className='absolute z-[3] inset-0 backdrop-blur-[2px]'
                  >

                  </article>
                </section>

                <h3
                  className={cn(
                    'flex flex-col',
                    'relative z-[2] text-custom-white-000 font-unbounded font-bold text-center uppercase',
                    'text-[20px] leading-[116%] pb-[33px]',
                    isActive ? 'blur-[10px]' : ''
                  )}
                >
                  {person.name.split(' ').map(part => <span key={part}>{part}</span>)}
                </h3>
              </div>

              <div
                className={cn(
                  'absolute inset-0 z-[1]',
                )}
              >
                <Image
                  quality={100}
                  fill
                  alt={person.name}
                  src={person.img}
                  draggable={false}
                  sizes='full'
                  loading='lazy'
                  decoding='async'
                  className={cn(
                    'object-cover object-top select-none',
                    isActive ? 'blur-[10px]' : ''
                  )}
                />
              </div>

              <AnimatePresence mode='popLayout'>
                {isActive && (
                  <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{
                      backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6))`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                    }}
                    className={cn(
                      'absolute inset-0 z-[4] flex flex-col justify-between',
                      'px-6 py-9'
                    )}
                  >
                    <div className='relative w-[89px] h-[43px]'>
                      <Image
                        src='/images/logo_vsr.png'
                        alt=''
                        loading='lazy'
                        decoding='async'
                        fill
                        quality={100}
                        className=''
                      />
                    </div>

                    <div
                      className={cn(
                        'font-geist font-medium text-[#E3EDF2] leading-[130%]',
                        'text-[16px]',
                        'md:text-[18px]'
                      )}
                    >
                      <BlurText
                        text={person.desc}
                        delay={20}
                        animateBy="words"
                        direction="top"
                        onAnimationComplete={() => { }}
                      />
                    </div>
                  </motion.section>
                )}
              </AnimatePresence>
            </li>
          </FadeContent>
          <div
            className={cn(
              'flex flex-col items-center justify-center text-center',
              'text-custom-brand-100 text-lg md:text-[22px] font-bold font-unbounded uppercase leading-tight'
            )}
          >
            <p>{person.role}</p>
            <p>
              VAMS SMART <br className='sm:hidden' />
              REALTY
            </p>
          </div>
        </div>

        <div className='mt-6 flex flex-col gap-3 md:gap-6 md:max-w-[600px] md:mx-auto'>
          <a
            href={`tel:${links.phone.num_number}`}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'py-1.5 px-6 rounded-xl cursor-pointer',
              'flex gap-[10px] items-center justify-center',
              'hover:scale-95 focus:scale-95 transition-all',
              'font-semibold font-geist leading-loose text-base text-custom-brand-100',
              'shadow-[#006b5b20] shadow-sm',
              'bg-custom-white-000 '
            )}
          >
            <div
              className='w-6 h-6'
            >
              <svg
                width="25"
                height="24"
                fill="none"
                viewBox="0 0 25 24"
              >
                <path
                  fill="#006B5B"
                  fillRule="evenodd"
                  d="M20.677 18.595c-.556 1.688-2.733 2.53-4.288 2.39-2.124-.192-4.435-1.319-6.19-2.56-2.579-1.823-4.994-4.645-6.402-7.639-.995-2.115-1.218-4.717.262-6.645.547-.713 1.14-1.093 2.028-1.137 1.233-.06 1.406.645 1.83 1.744.315.822.737 1.661.972 2.513.44 1.59-1.1 1.656-1.294 2.955-.12.82.873 1.92 1.321 2.504a12.1 12.1 0 0 0 3.13 2.883c.684.43 1.786 1.207 2.568.779 1.205-.66 1.092-2.692 2.776-2.004.872.355 1.717.867 2.55 1.316 1.287.693 1.227 1.41.736 2.9.368-1.113-.367 1.114 0 0Z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>

            <p>
              Позвонить
            </p>
          </a>
          <a
            href={links.whatsapp.contact_href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'py-1.5 px-6 rounded-xl cursor-pointer',
              'flex gap-[10px] items-center justify-center',
              'hover:scale-95 focus:scale-95 transition-all',
              'font-geist font-semibold leading-loose text-base text-custom-brand-100',
              'shadow-[#006b5b20] shadow-sm',
              'bg-custom-white-000 '
            )}
          >
            <div className='w-6 h-6'>
              <svg
                width="21"
                height="21"
                fill="none"
                viewBox="0 0 21 21"
              >
                <path
                  fill="#006B5B"
                  d="M10.69 0C4.997 0 .381 4.58.381 10.23c0 1.932.54 3.74 1.48 5.282L0 21l5.708-1.813a10.3 10.3 0 0 0 4.982 1.272c5.694 0 10.31-4.58 10.31-10.23S16.384 0 10.69 0m5.127 14.114c-.243.602-1.34 1.15-1.824 1.176-.483.025-.497.375-3.133-.77-2.635-1.146-4.22-3.93-4.346-4.11-.125-.179-1.02-1.455-.973-2.74.05-1.285.753-1.891 1.004-2.144a1 1 0 0 1 .714-.3c.207-.004.342-.006.495 0 .154.005.384-.033.584.498.2.53.677 1.835.738 1.968s.099.287.005.458c-.095.172-.143.278-.28.426s-.289.33-.412.443c-.137.125-.28.261-.136.528s.64 1.142 1.396 1.863c.972.927 1.81 1.234 2.067 1.374.259.14.413.125.573-.043.16-.17.687-.739.872-.993.186-.255.36-.205.597-.109.238.096 1.508.776 1.766.917.259.14.431.212.493.323s.042.634-.2 1.236Z"
                ></path>
              </svg>
            </div>

            <p>
              WhatsApp
            </p>
          </a>
          <a
            href={`mailto:${links.mail.email}`}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'py-1.5 px-6 rounded-xl cursor-pointer',
              'flex gap-[10px] items-center justify-center',
              'hover:scale-95 focus:scale-95 transition-all',
              'font-geist font-semibold leading-loose text-base text-custom-brand-100',
              'shadow-[#006b5b20] shadow-sm',
              'bg-custom-white-000 '
            )}
          >
            <div className='w-6 h-6'>
              <svg
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <g clipPath="url(#a)">
                  <path
                    fill="#006B5B"
                    d="M2.5 7.528v-.445c0-.287.125-.563.348-.766A1.25 1.25 0 0 1 3.688 6h16.625c.314 0 .617.114.84.317s.347.479.347.766v.445L12 12.945zm9.815 6.515a.64.64 0 0 1-.63 0L2.5 8.805v9.112c0 .287.125.563.348.766s.525.317.84.317h16.625c.314 0 .617-.114.84-.317a1.04 1.04 0 0 0 .347-.766V8.805z"
                  ></path>
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M2.5 6h19v13h-19z"></path>
                  </clipPath>
                </defs>
              </svg>
            </div>

            <p>
              Email
            </p>
          </a>
          <a
            href={links.office_address.yandex_href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'py-1.5 px-6 rounded-xl cursor-pointer',
              'flex gap-[10px] items-center justify-center',
              'hover:scale-95 focus:scale-95 transition-all',
              'font-geist font-semibold leading-loose text-base text-custom-brand-100',
              'shadow-[#006b5b20] shadow-sm',
              'bg-custom-white-000 '
            )}
          >
            <div className='w-6 h-6'>
              <svg
                width="25"
                height="24"
                fill="none"
                viewBox="0 0 25 24"
              >
                <path
                  fill="#006B5B"
                  d="M21 9.875c0 5.728-6.77 12.457-7.057 12.74a1.345 1.345 0 0 1-1.886 0C11.77 22.333 5 15.604 5 9.876a7.8 7.8 0 0 1 2.343-5.568A8.07 8.07 0 0 1 13 2c2.122 0 4.157.83 5.657 2.307A7.81 7.81 0 0 1 21 9.875m-8 3.938a4.04 4.04 0 0 0 2.222-.664 3.95 3.95 0 0 0 1.473-1.767 3.9 3.9 0 0 0 .228-2.275 3.9 3.9 0 0 0-1.095-2.016 4 4 0 0 0-2.048-1.078 4.06 4.06 0 0 0-2.31.224 4 4 0 0 0-1.796 1.45 3.9 3.9 0 0 0-.37 3.695c.201.478.496.912.867 1.277.372.366.813.656 1.298.854s1.006.3 1.531.3"
                ></path>
              </svg>
            </div>

            <p>
              Яндекс карты
            </p>
          </a>

          <p className={cn(
            "text-center text-custom-brand-000 font-semibold font-geist leading-tight",
            'text-sm md:text-[16px]'
          )}>
            Проектируемый пр. № 4062, 6, стр. 16, Москва офис 3.15
          </p>
        </div>
      </div>

      <TeamPersonFooter />
    </section>
  )
}

function TeamPersonFooter() {
  return (
    <footer
      style={{
        background: 'linear-gradient(158.29deg, #006B5B 5.78%, #02251F 79.69%)',
      }}
      className='rounded-t-[8px] mt-[36px] md:mt-[60px]'
    >
      <section
        className={cn(
          'max-w-[var(--breakpoint-1_5xl)] 1_5xl:mx-auto',
          'rounded-[8px] mx-auto flex',
        )}
      >
        <div className={cn(
          'w-full px-4 sm:px-6',
        )}>
          <div className={cn(
            'text-center mt-[30px]',
            "text-center justify-start text-custom-white-200 text-xl font-bold font-unbounded uppercase leading-normal tracking-wide"
          )}>
            vamsrealty.ru
          </div>

          <div
            className={cn(
              'mt-[30px]',
              'flex gap-[8px] justify-between h-[70px]',
              'md:max-w-[700px] md:mx-auto'
            )}
          >
            <a
              href={links.youtube.channel_href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                '!bg-custom-white-000 rounded-xl block',
                'focus:scale-95 hover:scale-95 transition-all cursor-pointer',
                'h-full grow',
                'flex items-center justify-center'
              )}
            >
              <div className='w-[43px] h-[31px] relative'>
                <svg
                  fill="none"
                  viewBox="0 0 43 31"
                  className='w-[43px] h-[31px]'
                >
                  <path
                    fill="#006B5B"
                    d="M22.256 2.583c5.484 0 9.969.088 14.117.266h.118c1.94 0 3.527 1.776 3.527 3.963V6.9l.008.088c.194 2.744.286 5.593.286 8.467a117 117 0 0 1-.285 8.466l-.009.089v.088c0 1.114-.395 2.147-1.125 2.914-.655.694-1.512 1.081-2.402 1.081h-.135c-4.442.202-9.137.307-13.974.307h-.89.008-.915c-4.855 0-9.55-.105-13.958-.298h-.135c-.89 0-1.738-.388-2.393-1.082-.722-.767-1.125-1.8-1.125-2.913v-.09l-.009-.088a108 108 0 0 1-.277-8.45v-.016c-.008-2.85.084-5.69.277-8.442l.009-.09v-.088c0-2.195 1.578-3.979 3.518-3.979h.118c4.157-.185 8.642-.266 14.126-.266h1.52m0-2.599h-1.512c-4.837 0-9.59.065-14.243.266C3.074.266.295 3.196.295 6.828.085 9.718-.008 12.59 0 15.472a114 114 0 0 0 .285 8.636c0 3.631 2.78 6.585 6.206 6.585A309 309 0 0 0 20.584 31h1.814c4.795 0 9.49-.097 14.1-.307 3.435 0 6.215-2.954 6.215-6.585.202-2.882.294-5.763.285-8.644.009-2.882-.084-5.755-.285-8.644 0-3.632-2.78-6.546-6.215-6.546C31.847.064 27.102 0 22.256 0Z"
                  ></path>
                </svg>

                <svg
                  width="13"
                  height="16"
                  fill="none"
                  viewBox="0 0 13 16"
                  className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                >
                  <path
                    fill="#006B5B"
                    d="M1.524 15.062A1 1 0 0 1 0 14.21V1.79A1 1 0 0 1 1.524.938l10.092 6.21a1 1 0 0 1 0 1.704z"
                  ></path>
                </svg>
              </div>

            </a>

            <a
              href={links.telegram.channel_href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                '!bg-custom-white-000 rounded-xl',
                'focus:scale-95 hover:scale-95 transition-all cursor-pointer',
                'h-full grow',
                'flex items-center justify-center'
              )}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="59"
                height="58"
                fill="none"
                viewBox="0 0 59 58"
              >
                <path
                  stroke="#006B5B"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.8"
                  d="M21.14 30.303 36.356 44.11a1.32 1.32 0 0 0 1.31.281 1.35 1.35 0 0 0 .583-.386 1.4 1.4 0 0 0 .321-.631l6.366-28.637a1.44 1.44 0 0 0-.033-.747 1.4 1.4 0 0 0-.403-.623 1.32 1.32 0 0 0-1.379-.241l-31.235 12.65c-.272.11-.502.309-.656.565a1.43 1.43 0 0 0 .143 1.666c.196.225.456.378.743.437l9.022 1.86Zm-.087.855L44.21 13.79"
                ></path>
                <path
                  stroke="#006B5B"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.8"
                  d="m28.629 37.423-5.25 5.374a1.315 1.315 0 0 1-1.464.298 1.35 1.35 0 0 1-.603-.506 1.4 1.4 0 0 1-.226-.765V30.628"
                ></path>
              </svg>
            </a>

            <a
              href={links.instagram.account_href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                '!bg-custom-white-000 rounded-xl',
                'focus:scale-95 hover:scale-95 transition-all cursor-pointer',
                'h-full grow',
                'flex items-center justify-center'
              )}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="33"
                fill="none"
                viewBox="0 0 34 33"
              >
                <path
                  fill="#006B5B"
                  d="M11.501 16.5a5.5 5.5 0 1 1 11-.001 5.5 5.5 0 0 1-11 .001m-2.973 0A8.473 8.473 0 0 0 17 24.973a8.473 8.473 0 1 0 0-16.946A8.473 8.473 0 0 0 8.528 16.5m15.3-8.808a1.98 1.98 0 1 0 3.963-.001 1.98 1.98 0 0 0-3.962 0ZM10.335 29.93c-1.609-.074-2.483-.342-3.064-.568-.77-.3-1.32-.657-1.898-1.234a5.1 5.1 0 0 1-1.235-1.897c-.226-.581-.494-1.455-.567-3.064-.08-1.74-.096-2.262-.096-6.668s.017-4.927.096-6.668c.073-1.609.342-2.482.567-3.064.3-.77.657-1.32 1.235-1.898A5.1 5.1 0 0 1 7.27 3.636c.58-.227 1.455-.495 3.064-.568 1.74-.08 2.262-.096 6.667-.096 4.406 0 4.927.017 6.668.096 1.609.073 2.482.343 3.064.568a5.1 5.1 0 0 1 1.898 1.234 5.1 5.1 0 0 1 1.234 1.898c.227.581.495 1.455.568 3.064.08 1.74.096 2.262.096 6.668 0 4.405-.016 4.927-.096 6.668-.073 1.609-.342 2.483-.568 3.064-.3.77-.657 1.32-1.234 1.897a5.1 5.1 0 0 1-1.898 1.234c-.581.226-1.455.494-3.064.568-1.74.08-2.262.095-6.668.095-4.405 0-4.928-.015-6.667-.095ZM10.198.1C8.44.18 7.242.458 6.193.866A8.1 8.1 0 0 0 3.27 2.77a8.1 8.1 0 0 0-1.904 2.922C.958 6.742.68 7.941.6 9.697.519 11.457.5 12.02.5 16.5s.019 5.043.1 6.803c.08 1.756.359 2.956.766 4.005A8.1 8.1 0 0 0 3.27 30.23a8.1 8.1 0 0 0 2.923 1.904c1.05.407 2.248.686 4.005.766 1.76.08 2.322.1 6.803.1 4.482 0 5.043-.019 6.802-.1 1.757-.08 2.957-.358 4.006-.766a8.1 8.1 0 0 0 2.923-1.904 8.1 8.1 0 0 0 1.903-2.922c.408-1.05.688-2.249.766-4.005.08-1.761.099-2.322.099-6.803s-.019-5.043-.099-6.803c-.08-1.756-.358-2.956-.766-4.005a8.1 8.1 0 0 0-1.903-2.922A8.1 8.1 0 0 0 27.81.866C26.76.458 25.56.18 23.805.1c-1.76-.08-2.322-.1-6.803-.1-4.482 0-5.043.019-6.804.1"
                ></path>
              </svg>
            </a>
          </div>

          <div className='mt-[30px] mb-[28px] md:my-[40px]'>
            <p
              className={cn(
                'text-center text-custom-white-100 text-xs md:text-[16px] md:leading-[18px] font-semibold font-geist leading-3',
              )}
            >
              VAMS Smart Realty <br />
              Умный подход к завтра
            </p>
          </div>
        </div>
      </section>
    </footer >
  )
}
