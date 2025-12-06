
'use client';
import { BlurText } from '@/bits/BlurText';
import { mittEmitter, MittEventBusEvents } from '@/ui/eventBus';
import { cn } from '@/utils/cn'
import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

const step_config = [
  {
    title: 'Переговоры с<br/>девелопером и<br/>защиту интересов',
    desc: '',
  },
  {
    title: 'Контроль<br/>бронирования и<br/>условий по<br/>парковочным и<br/>кладовым<br/>помещениям',
    desc: '',
  },
  {
    title: 'Вход в проект<br/>в наиболее выгодный<br/>момент',
    desc: '',
  },
  {
    title: 'Расчёт доходности,<br/>окупаемости и оценку<br/>соответствия<br/>премиальному<br/>уровню',
    desc: '',
  },
  {
    title: 'Развернутый<br/>аналитический отчёт<br/>с прогнозом цен и<br/>ликвидности',
    desc: '',
  },
]

type Props = {}

export function StepperBlock({ }: Props) {
  const blocksRef = useRef<(HTMLDivElement | null)[]>(
    Array.from({ length: step_config.length }).map(() => null)
  );
  const [isIntersectedBlocks, setIsIntersectedBlocks] = useState(
    Array.from({ length: step_config.length }).map(() => false)
  );
  const isIntersectedBlocksRef = useRef(isIntersectedBlocks)

  const [lineTopByBlocks, setLineTopByBlocks] = useState(
    Array.from({ length: step_config.length }).map(() => '0')
  );

  const lineRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    isIntersectedBlocksRef.current = isIntersectedBlocks;
  }, [isIntersectedBlocks])

  useLayoutEffect(() => {
    const checkIntersection = () => {
      for (const blockIDX in step_config) {
        const idx = +blockIDX;

        const blockEL = blocksRef.current[idx];
        const lineEL = lineRef.current;
        const sectionEl = sectionRef.current;
        if (!blockEL || !lineEL || !sectionEl) return;

        const blockRect = blockEL.getBoundingClientRect();
        const lineRect = lineEL.getBoundingClientRect();
        const sectionRect = sectionEl.getBoundingClientRect();

        const lineTop = Math.abs(sectionRect.top - lineRect.top);
        const blockTop = Math.abs(blockRect.top - sectionRect.top);

        const isIntersected = lineTop > blockTop;

        const pointHeight = 34;
        const resHeight = blockRect.height - pointHeight;
        const lineTopByBlock =
          (((Math.min(Math.max(0, lineTop - blockTop - pointHeight), resHeight)) / resHeight) * 100).toFixed()

        setIsIntersectedBlocks(prev => {
          const next = prev.slice();
          next[idx] = isIntersected;
          return next;
        })

        setLineTopByBlocks(prev => {
          const next = prev.slice();
          next[idx] = lineTopByBlock;
          return next;
        })
      }
    }

    window.addEventListener('scroll', checkIntersection, { passive: true })
    window.addEventListener('resize', checkIntersection)

    checkIntersection()
    setTimeout(checkIntersection, 64)

    return () => {
      window.removeEventListener("scroll", checkIntersection);
      window.removeEventListener("resize", checkIntersection);
    }
  }, [])

  const [openDescByEvent, setOpenDescByEvent] = useState(false)
  useEffect(() => {
    mittEmitter.on(MittEventBusEvents.OPEN_STEPPERBLOCK_STEPS, () => {
      setOpenDescByEvent(true);
      setTimeout(setOpenDescByEvent, 1000, false)
    })

    return () => mittEmitter.off(MittEventBusEvents.OPEN_STEPPERBLOCK_STEPS);
  }, [])

  return (
    <section
      ref={sectionRef}
      className={cn(
        'max-w-[var(--breakpoint-1_5xl)] 1_5xl:mx-auto relative',
        'px-6 py-[80px]'
      )}
    >
      <div
        className={cn(
          'relative mx-auto',
          'w-[312px]',
          'md:w-[438px]',
          'lg:w-[639px]'
        )}
      >
        {step_config.map((step, idx) => {
          const isIntersected = isIntersectedBlocks[idx];
          const lineTopByBlock = lineTopByBlocks[idx];

          const shouldShowBlock = openDescByEvent || isIntersected;

          return (
            <div
              ref={ref => {
                blocksRef.current[idx] = ref
              }}
              key={step.title}
              className={cn(
                'flex relative z-[2]',
                'gap-6 md:gap-9 lg:gap-[75px]',
                // Глобальная плавность для перестроек размера и цвета
                'transition-all duration-500',
              )}
            >
              <div
                key='pin 1'
                className={cn(
                  'grow relative',
                  'w-[34px] min-w-[34px] max-w-[34px]'
                )}
              >
                <div
                  key='pin 1'
                  className={cn(
                    'absolute top-0 left-1/2 -translate-x-1/2',
                    // Плавность цвета, тени, blur
                    'transition-all duration-500',
                    cn(
                      shouldShowBlock
                        ? cn(
                          'bg-[rgba(66,192,172,0.6)]',
                          'shadow-[0_15px_36.9px_3px_#D6E1EB,inset_-1px_-3px_3px_rgba(255,255,255,0.1),inset_1px_3px_5px_rgba(255,255,255,0.3),inset_0px_0px_14px_rgba(255,255,255,0.35),inset_0px_2px_10px_5px_rgba(53,53,53,0.05)]'
                        )
                        : cn(
                          'bg-white/5',
                          'shadow-[0_15px_36.9px_3px_#D6E1EB,inset_-1px_-3px_3px_rgba(255,255,255,0.1),inset_1px_3px_5px_rgba(255,255,255,0.3),inset_0px_0px_14px_rgba(255,255,255,0.35),inset_0px_2px_10px_5px_rgba(53,53,53,0.05)]',
                        )
                    ),
                    'backdrop-blur-[5px] rounded-full',
                    'w-[34px] h-[34px]',
                    'flex items-center justify-center',
                  )}
                >
                  <div
                    className={cn(
                      // Плавный переход цвета фона и тени
                      'transition-all duration-500',
                      isIntersected
                        ? cn(
                          'bg-success',
                          'shadow-[0px_3px_30.5px_5px_rgba(29,184,160,0.3)]'
                        )
                        : cn(
                          'bg-white'
                        ),
                      'w-4 h-4 rounded-full'
                    )}
                  />
                </div>

                <div
                  className={cn(
                    'bg-white transition-all duration-500',
                    'absolute bottom-0 left-1/2 -translate-x-1/2 top-[34px]',
                    shouldShowBlock ? 'w-[3px]' : 'w-[1px]'
                  )}
                >
                  <div
                    style={{
                      height: lineTopByBlock + '%',
                    }}
                    className={cn(
                      'bg-[#42C0AC] absolute left-0 right-0 top-0'
                    )}
                  />
                </div>
              </div>

              <div
                className={cn(
                  'pb-[100px] md:pb-[122px]'
                )}
              >
                <p
                  className={cn(
                    'transition-all duration-500',
                    shouldShowBlock
                      ? 'text-[#15A28C]'
                      : 'text-custom-grey-100',
                    'font-unbounded font-semibold leading-[120%]',
                    'text-[16px] mt-[8px]',
                    'md:text-[18px]'
                  )}
                >
                  {0 + String(idx + 1)}
                </p>

                <p
                  className={cn(
                    'transition-all duration-500',
                    'mt-12',
                    'font-unbounded font-medium leading-[100%]',
                    'text-[16px]',
                    'sm:text-[24px]',
                    'md:text-[30px]',
                    'lg:text-[36px]',
                  )}
                >
                  <AnimatePresence mode='popLayout'>
                    {shouldShowBlock && (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        dangerouslySetInnerHTML={{ __html: step.title }}
                        className='bg-gradient-to-l from-[#089F87] via-[#0D695B] to-[#004539] bg-clip-text text-transparent'
                      />
                    )}
                  </AnimatePresence>
                  <AnimatePresence
                    mode='popLayout'
                  >
                    {!shouldShowBlock && (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        dangerouslySetInnerHTML={{ __html: step.title }}
                        className='text-[#BDC6C8]'
                      />
                    )}
                  </AnimatePresence>
                </p>

                <AnimatedDescHeight
                  show={shouldShowBlock}
                  className={cn(
                    'font-geist font-semibold leading-[130%]',
                    'text-custom-brand-000',
                    'text-[14px]',
                    'md:text-[16px]',
                    'lg:text-[20px]'
                  )}
                >
                  <BlurText
                    text={step.desc}
                    delay={40}
                    threshold={0}
                    animateBy="words"
                    direction="top"
                  />
                </AnimatedDescHeight>
              </div>
            </div>
          )
        })}


        <div
          key='line'
          className={cn(
            'absolute inset-0 z-[1]',
          )}
        >
          <div
            ref={lineRef}
            className={cn(
              // 'bg-green-500',
              'sticky left-0 right-0 h-[1px]',
              'top-[320px] md:top-[500px] lg:top-[360px]'
            )}
          />
        </div>
      </div>
    </section>
  )
}


import { useCallback } from 'react'

type AnimatedDescHeightProps = {
  show: boolean
  children: React.ReactNode
  className?: string
}

export function AnimatedDescHeight({ show, children, className }: AnimatedDescHeightProps) {
  const innerRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  // Мемоизированный коллбэк для установки высоты (без перезаписи ссылки)
  const measureHeight = useCallback(() => {
    if (innerRef.current) {
      setHeight(innerRef.current.scrollHeight)
    }
  }, [])

  // Высота рассчитывается при маунте, изменении show или children
  useLayoutEffect(() => {
    if (show) measureHeight()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show, children])

  // Пересчитываем высоту при изменении размеров контента (например, изображение загружается)
  useLayoutEffect(() => {
    if (!show) return
    const el = innerRef.current
    if (!el) return

    let resizeObserver: ResizeObserver | undefined

    if ('ResizeObserver' in window) {
      resizeObserver = new ResizeObserver(measureHeight)
      resizeObserver.observe(el)
    }
    return () => {
      resizeObserver?.disconnect()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show, children])

  return (
    <AnimatePresence initial={false} mode='sync'>
      {show && (
        <motion.div
          initial={{ height: 0, marginTop: 0, opacity: 0 }}
          animate={{ height, marginTop: 48, opacity: 1 }}
          exit={{ height: 0, marginTop: 0, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          style={{ overflow: 'hidden' }}
          className={className}
        >
          <div ref={innerRef}>
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

