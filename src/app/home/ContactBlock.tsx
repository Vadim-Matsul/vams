import { FadeContent } from '@/bits/FadeContent';
import { GlareHover } from '@/bits/GlareHover';
import { SplitText } from '@/bits/SplitText';
import { InstagramIcon, TelegramIcon, TelegramV2Icon, WhatsAppIcon } from '@/components/icons';
import { links } from '@/configs/links';
import { cn } from '@/utils/cn';
import Image from 'next/image';

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

export function ContactBlock() {

  return (
    <section>
      <GlareHover
        glareColor="#ffffff"
        glareOpacity={1}
        glareAngle={-30}
        glareSize={300}
        transitionDuration={1800}
        playOnce={true}
        className='h-full min-h-full'
      >
        <section
          className={cn(
            'max-w-[var(--breakpoint-1_5xl)] 1_5xl:mx-auto',
          )}
        >
          <div
            className={cn(
              'flex',
              'flex-col gap-[60px]',
              'md:flex-row md:gap-[30px] md:justify-center',
              'xl:items-center',
              '1_5xl:gap-[116px]',
              'py-[80px] px-[18px]',
              'md:px-[24px]',
              'xl:pt-[36px] xl:pb-[0px]',
            )}
          >
            <div
              className={cn(
                'h-[370px] relative',
                'md:w-[414px]',
                'xl:w-[790px] xl:h-[708px] relative'
              )}
            >
              <Image
                src='/images/final_keys.png'
                quality={100}
                sizes='full'
                fill
                alt=''
                draggable={false}
                className='object-contain select-none'
              />
            </div>

            <div
              className={cn(
                'flex flex-col',
                'gap-[64px] mx-auto',
                'md:gap-[36px] md:mx-0',
                'xl:gap-[64px] xl:h-fit'
              )}
            >
              <div
                className={cn(
                  'flex flex-col gap-3',
                )}
              >
                <p
                  className={cn(
                    'font-geist text-custom-grey-300',
                    'text-[16px] leading-[130%]',
                    'xl:text-[19px]'
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
                    'text-[18px] leading-[116%]',
                    'hover:opacity-80 focus:opacity-80 transition-all',
                    'xl:text-[20px]'
                  )}
                >
                  <SplitText
                    {...options}
                    duration={2}
                    textAlign='left'
                    text={<>
                      Москва<br />
                      Больша&nbsp;Никитская<br />
                      улица,&nbsp;15&nbsp;стр&nbsp;2
                    </>}
                  />
                </a>
              </div>
              <div
                className={cn(
                  'flex flex-col gap-3',
                )}
              >
                <p
                  className={cn(
                    'font-geist text-custom-grey-300',
                    'text-[16px] leading-[130%]',
                    'xl:text-[19px]'
                  )}
                >
                  Телефон
                </p>

                <a
                  href={`tel:+${links.phone.num_number}`}
                  className={cn(
                    'block w-fit font-unbounded text-custom-brand-200 uppercase font-bold',
                    'text-[18px] leading-[116%]',
                    'hover:opacity-80 focus:opacity-80 transition-all',
                    'xl:text-[20px]'
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
                  'flex flex-col gap-3',
                )}
              >
                <p
                  className={cn(
                    'font-geist text-custom-grey-300',
                    'text-[16px] leading-[130%]',
                    'xl:text-[19px]'
                  )}
                >
                  Email
                </p>

                <a
                  href={`mailto:${links.mail.email}`}
                  className={cn(
                    'block w-fit font-unbounded text-custom-brand-200 uppercase font-bold',
                    'text-[18px] leading-[116%]',
                    'hover:opacity-80 focus:opacity-80 transition-all',
                    'xl:text-[20px]'
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

              <div className='flex items-center gap-4'>
                <FadeContent
                  blur
                  duration={750}
                  threshold={0.7}
                  easing="ease-out"
                  className='relative w-fit h-fit'
                >
                  <a
                    href={links.telegram.channel_href}
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
          </div>
        </section>
      </GlareHover>
    </section>
  )
}