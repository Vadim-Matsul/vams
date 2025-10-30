'use client';

import { BlurText } from '@/bits/BlurText';
import { CountUp } from '@/bits/CountUp';
import { GlareHover } from '@/bits/GlareHover';
import { homeBlockIDs } from '@/configs/homeBlockIds';
import { LiquidGlass } from '@/ui/LiquidGlass';
import { cn } from '@/utils/cn'
import { motion } from 'motion/react';
import Image from 'next/image';

type Props = {}

export function KPIBlock({ }: Props) {

  return (
    <section
      id={homeBlockIDs.ABOUT}
      key='KPI block'
      data-snap
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
          sizes='full'
          alt='kpi_towns'
          className='select-none object-cover'
        />
      </motion.div>

      <div
        className='relative z-[3]'
      >
        <h3
          className={cn(
            'bg-custom-white-000/70 backdrop-blur-[20px] text-custom-brand-100 text-center',
            'flex flex-col whitespace-nowrap font-semibold',
            ' px-4 py-2 w-min mx-auto rounded-[20px]',
            'text-[20px] leading-[22px] my-10',
            'md:text-[24px] md:leading-[26px]',
            'xl:text-[28px] xl:leading-[30px] xl:px-8 xl:py-5',
          )}
        >
          <span>Методика VAMS: как формируется</span>
          <span>инвестиционное решение</span>
        </h3>

        <section
          className={cn(
            'relative z-[3] rounded-[8px] flex',
            'max-w-[var(--breakpoint-1_5xl)] 1_5xl:mx-auto',
            'pb-[80px] px-[18px] flex-col gap-6 items-center',
            'md:px-[0px]',
            'lg:pb-[120px]',
            'xl:flex-row xl:gap-8 xl:justify-center'
          )}
        >
          <div
            className={cn(
              'rounded-[8px] overflow-hidden relative z-[3]',
              'w-[324px]',
              'md:w-[550px]',
              'xl:w-[594px]'
            )}
          >
            <GlareHover
              glareColor="#ffffffB3"
              glareOpacity={0.7}
              glareAngle={-10}
              glareSize={200}
              transitionDuration={1600}
              playOnce={false}
            >
              <LiquidGlass
              >
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
                      'font-geist font-semibold leading-[130%] text-custom-black-000',
                      'text-[14px]',
                      'lg:text-[18px]'
                    )}
                  >

                    Мы применяем комплексную методику анализа. В работу включается информация о закрытых сделках, проверка документов, оценка планов застройщиков и перспектив развития районов. Инвестиции в недвижимость мы оцениваем с учётом макроэкономических тенденций, транспортной инфраструктуры и изменений в структуре спроса.
                  </div>
                </div>
              </LiquidGlass>
            </GlareHover>
          </div>

          <div
            className={cn(
              'rounded-[8px] overflow-hidden relative z-[3]',
              'w-[324px]',
              'md:w-[550px]',
              'xl:w-[594px]'
            )}
          >
            <GlareHover
              glareColor="#ffffffB3"
              glareOpacity={0.7}
              glareAngle={-10}
              glareSize={200}
              transitionDuration={1600}
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
                      'font-geist font-semibold leading-[130%] text-custom-black-000',
                      'text-[14px]',
                      'lg:text-[18px]'
                    )}
                  >
                    При вложениях в строительство мы проверяем репутацию девелопера и риски задержек. Для готовых объектов учитываем арендную доходность и скорость перепродажи. Такой подход позволяет формировать рекомендации, где отражены прогнозы, сценарии доходности и ключевые условия для переговоров.
                  </div>
                </div>
              </LiquidGlass>
            </GlareHover>
          </div>
        </section>
      </div>
    </section>
  )
}
