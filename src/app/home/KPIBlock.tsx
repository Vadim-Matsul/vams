'use client';

import { BlurText } from '@/bits/BlurText';
import { CountUp } from '@/bits/CountUp';
import { GlareHover } from '@/bits/GlareHover';
import { LiquidGlass } from '@/ui/LiquidGlass';
import { cn } from '@/utils/cn'
import { motion } from 'motion/react';
import Image from 'next/image';

type Props = {}

export function KPIBlock({ }: Props) {

  return (
    <div
      key='KPI block'
      className='relative z-[2] overflow-hidden text-custom-brand-200'
    >
      <motion.div
        initial={{ y: 0, scale: 1 }}
        animate={{ y: [0, -30, 0], scale: [1, 1.05, 1] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className='z-[1] absolute inset-0 -top-[30px] h-[110%]'
      >
        <Image
          fill
          src='/images/kpi_towns.png'
          quality={100}
          draggable={false}
          alt='kpi_towns'
          className='select-none object-cover'
        />
      </motion.div>

      <section
        className={cn(
          'relative z-[3] rounded-[8px] flex',
          'max-w-[var(--breakpoint-1_5xl)] 1_5xl:mx-auto',
          'py-[80px] px-[18px] flex-col gap-6 items-center',
          'md:px-[0px]',
          'lg:py-[120px]',
          'xl:flex-row xl:gap-8 xl:justify-center'
        )}
      >
        <div
          key='25%'
          className={cn(
            'rounded-[8px] overflow-hidden relative z-[3]',
            'w-[324px]',
            'md:w-[550px]',
            'xl:w-[594px]'
          )}
        >
          <GlareHover
            glareColor="#ffffff"
            glareOpacity={0.7}
            glareAngle={-30}
            glareSize={300}
            transitionDuration={800}
            playOnce={false}
          >
            <LiquidGlass>
              <div
                className={cn(
                  'flex flex-col w-full h-full ',
                  'px-[36px] py-10 gap-[36px]',
                  'md:px-[95px] md:py-12 md:gap-[36px]',
                  'xl:py-[70px] xl:px-[87px]'
                )}
              >
                <div
                  className={cn(
                    'flex flex-col text-center',
                    'gap-6 lg:gap-10'
                  )}
                >
                  <div
                    className={cn(
                      'font-unbounded font-medium tracking-[-1px] whitespace-nowrap',
                      'text-[40px] leading-[96%]',
                      'md:text-[52px]',
                      'lg:text-[80px]'
                    )}
                  >
                    <CountUp
                      from={0}
                      to={25}
                      separator=" "
                      direction="up"
                      duration={1}
                      className={cn(
                        'inline-block',
                        "w-[64px] min-w-[64px] max-w-[64px]",
                        "md:w-[83px] md:min-w-[83px] md:max-w-[83px]",
                        "lg:w-[124px] lg:min-w-[124px] lg:max-w-[124px]"
                      )}
                    />
                    %
                  </div>
                  <div
                    className={cn(
                      'font-unbounded font-medium tracking-[-1px]',
                      'text-[24px] leading-[100%]',
                    )}
                  >
                    Средняя годовая доходность от инвестиций
                  </div>
                </div>

                <div
                  className={cn(
                    'font-geist font-semibold leading-[130%] text-custom-black-000',
                    'text-[14px]',
                    'lg:text-[18px]'
                  )}
                >
                  <BlurText
                    text={'VSR — агентство недвижимости нового поколения. Где каждый объект рассматривается не только как пространство для жизни, но и как инвестиционный актив с потенциалом роста.'}
                    delay={60}
                    threshold={0.9}
                    animateBy="words"
                    direction="top"
                  />
                </div>
              </div>
            </LiquidGlass>
          </GlareHover>
        </div>

        <div
          key='300+'
          className={cn(
            'rounded-[8px] overflow-hidden relative z-[3]',
            'w-[324px]',
            'md:w-[550px]',
            'xl:w-[594px]'
          )}
        >
          <GlareHover
            glareColor="#ffffff"
            glareOpacity={0.7}
            glareAngle={-30}
            glareSize={300}
            transitionDuration={800}
            playOnce={false}
          >
            <LiquidGlass>
              <div
                className={cn(
                  'flex flex-col w-full h-full ',
                  'px-[36px] py-10 gap-[36px]',
                  'md:px-[95px] md:py-12 md:gap-[36px]',
                  'xl:py-[70px] xl:px-[87px]'
                )}
              >
                <div
                  className={cn(
                    'flex flex-col text-center',
                    'gap-6 lg:gap-10'
                  )}
                >
                  <div
                    className={cn(
                      'font-unbounded font-medium tracking-[-1px]',
                      'text-[40px] leading-[96%]',
                      'md:text-[52px]',
                      'lg:text-[80px]'
                    )}
                  >
                    <CountUp
                      from={0}
                      to={300}
                      separator=" "
                      direction="up"
                      duration={1}
                      className={cn(
                        'inline-block',
                        "w-[105px] min-w-[105px] max-w-[105px]",
                        "md:w-[137px] md:min-w-[137px] md:max-w-[137px]",
                        "lg:w-[210px] lg:min-w-[210px] lg:max-w-[210px]"
                      )}
                    />
                    +
                  </div>
                  <div
                    className={cn(
                      'font-unbounded font-medium tracking-[-1px]',
                      'text-[24px] leading-[100%]',
                    )}
                  >
                    Проектов, с которыми мы работаем
                  </div>
                </div>

                <div
                  className={cn(
                    'font-geist font-semibold leading-[130%] text-custom-black-000',
                    'text-[14px]',
                    'lg:text-[18px]'
                  )}
                >
                  <BlurText
                    text={'Мы создаём новые стандарты, сочетая глубокую аналитику, экспертные знания рынка и клиентоориентированный сервис. Наши решения для тех, кто ценит стратегический подход.'}
                    delay={60}
                    threshold={0.9}
                    animateBy="words"
                    direction="top"
                  />
                </div>
              </div>
            </LiquidGlass>
          </GlareHover>
        </div>
      </section>
    </div>
  )
}
