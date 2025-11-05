'use client';

/* eslint-disable @next/next/no-img-element */
import { ArrowRightIcon } from '@/components/icons'
import { links } from '@/configs/links';
import { LiquidGlass } from '@/ui/LiquidGlass'
import { cn } from '@/utils/cn'

const config = {
  benefits: [
    'Полная проверка юридической чистоты объекта',
    'Защита интересов клиента на всех этапах сделки',
    'Прозрачная стоимость без скрытых расходов',
    'Гарантия безопасности и законности сделки',
  ]
}

type Props = {}

export function HeroBlock({ }: Props) {

  return (
    <section
      className={cn(
        'h-[540px] relative flex flex-col'
      )}
    >
      <section
        className={cn(
          'relative z-[2] w-full grow flex flex-col ',
          'px-[18px] md:px-[32px]',
          '1_5xl:max-w-[1440px] 1_5xl:mx-auto',
        )}
      >
        <div
          className={cn(
            'grow flex flex-col py-[40px] justify-between'
          )}
        >
          <div>
            <div
              className={cn(
                'bg-custom-white-000',
                'flex items-center gap-2 sm:gap-4',
                'py-2 px-3 rounded-[10px]'
              )}
            >
              <h1
                className={cn(
                  'font-medium !my-0',
                  '!text-[20px]',
                  'sm:!text-[26px]',
                  'lg:!text-[32px]',
                )}
              >
                Юридическое сопровождение сделок с недвижимостью
              </h1>

              <img
                src='/images/legal_support_icon.png'
                alt='investment_icon.png'
                className={cn(
                  'aspect-square object-contain ',
                  'w-[30px] min-w-[30px]',
                  'sm:w-[40px] sm:min-w-[40px]',
                )}
              />
            </div>

            <div
              className={cn(
                'bg-custom-white-000/60 backdrop-blur-[10px] rounded-[20px]',
                'px-4 py-6 mt-8',
                'md:w-min'
              )}
            >
              <ul
                className='flex flex-col gap-4 '
              >
                {config.benefits.map(benefit => {

                  return (
                    <li
                      key={benefit}
                      className={cn(
                        'flex items-center gap-2 md:gap-3.5'
                      )}
                    >
                      <div
                        className={cn(
                          'w-3 min-w-3 aspect-square bg-custom-brand-100 rounded-full',
                        )}
                      />

                      <h3
                        className={cn(
                          ' text-custom-brand-100 font-semibold',
                          'text-[16px] leading-[18px]',
                          'sm:text-[20px] md:whitespace-nowrap',
                          'lg:text-[22px]'
                        )}
                      >
                        {benefit}
                      </h3>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>

          <LiquidGlass
            blur={5}
            displacementScale={1200}
            className={cn(
              'glow-animate cursor-pointer',
              ' text-custom-white-200',
              'bg-[#63bcae]',
              'border-[1px] border-[#63bcae]',
              'rounded-[90px] overflow-hidden',
              'mx-auto transition-all',
              'hover:scale-[.95] focus:scale-[.95]',
              'w-min px-6 h-[44px]',
            )}
          >
            <a
              href={links.whatsapp.contact_href}
              target='_blank'
              className={cn(
                'w-full h-full rounded-[90px]',
                'flex items-center justify-center',
                'gap-2.5'
              )}
            >
              <p
                className={cn(
                  'font-geist font-semibold whitespace-nowrap leading-none',
                  'text-[16px] [text-shadow:-3px_1px_3px_rgba(0,0,0,0.9)]',
                  'md:text-[20px]'
                )}
              >
                Обсудить проект
              </p>

              <div>
                <ArrowRightIcon
                  className={cn(
                    'w-[20px] h-[20px]',
                    '[filter:drop-shadow(-4px_1px_3px_rgba(0,0,0,1))]'
                  )}
                />
              </div>
            </a>
          </LiquidGlass>
        </div>
      </section>

      <section
        className={cn(
          'absolute inset-0 z-[1]'
        )}
      >
        <img
          src='/images/dark_sity_2.png'
          alt='инвестиции в недвижимость'
          className='w-full h-full object-cover'
        />
      </section>
    </section>
  )
}
