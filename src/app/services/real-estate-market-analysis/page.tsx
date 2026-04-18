import { Footer } from '@/components/footer/Footer';
import { Header } from '@/components/header/Header';
import { cn } from '@/utils/cn';
import { HeroBlock } from './HeroBlock';
import { Breadcrumbs } from './Breadcrumbs';
import { LiquidGlass } from '@/ui/LiquidGlass';
import { KPIBlock } from './KPIBlock';
import { ReviewsBlock } from '@/app/home/ReviewsBlock';
import { StepperBlock } from './StepperBlock';
import { TeamBlock } from '@/app/home/TeamBlock';
import { ContactForm } from '@/app/home/ContactForm';
import { ContactBlock } from '@/app/home/ContactBlock';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Анализ рынка недвижимости в Москве — профессиональная аналитика премиального сегмента | VAMS SMART REALTY',
  description: 'Экспертный анализ рынка премиальной недвижимости в Москве: прогноз цен, оценка ликвидности, рекомендации по лучшему времени для сделки и персональная инвестиционная стратегия. Подготовим детальный отчёт и поможем принять взвешенное решение о покупке или продаже элитных объектов.',
  alternates: { canonical: '/services/real-estate-market-analysis' },
  openGraph: {
    url: '/services/real-estate-market-analysis',
    images: [{ url: '/images/dark_sity_2.png', width: 1200, height: 630, alt: 'Анализ рынка недвижимости — VAMS SMART REALTY' }],
  },
};

export default function RealEstateMarketAnalysis() {

  return (
    <div className='font-unbounded'>
      <Header />
      <div className='relative z-[2]'>
        <Breadcrumbs />
        <HeroBlock />

        <div
          className={cn(
            'px-[18px] md:px-[32px] py-[60px]',
            '1_5xl:max-w-[1440px] 1_5xl:mx-auto xl:py-[80px]'
          )}
        >
          <LiquidGlass
            displacementScale={1200}
            blur={10}
            className={cn(
              'rounded-[20px] p-4',
              'max-w-[420px] w-full mx-auto',
              'sm:max-w-[500px]',
              'md:max-w-[700px]',
              'lg:max-w-[1000px]',
              'lg:px-8 lg:py-6'
            )}
          >
            <div
              className='flex flex-col gap-6'
            >
              <h2
                className={cn(
                  'text-[20px] text-center font-semibold',
                  'sm:text-[22px]',
                  'xl:text-[26px]'
                )}
              >
                Почему аналитика — ключ к выгодным инвестициям
              </h2>

              <p
                className={cn(
                  'text-[16px] leading-[18px] font-medium tracking-[0.5px] opacity-80',
                  'sm:text-[18px]',
                  'xl:text-[20px] xl:leading-[22px]'
                )}
              >
                Московский рынок элитного жилья остаётся одним из самых динамичных сегментов столицы. Цены и спрос зависят не только от экономической ситуации, но и от инфраструктурных проектов, интереса девелоперов и поведения покупателей. Обзор рынка недвижимости помогает понять, какие районы сегодня наиболее перспективны, а где риски перевешивают выгоду. Экспертная аналитика премиальной недвижимости в Москве позволяет заранее оценить стоимость и ликвидность объектов, чтобы решение основывалось на цифрах, а не на эмоциях.
              </p>
              <p
                className={cn(
                  'text-[16px] leading-[18px] font-medium tracking-[0.5px] opacity-80',
                  'sm:text-[18px]',
                  'xl:text-[20px] xl:leading-[22px]'
                )}
              >
                Компания VAMS SMART REALTY работает как с покупателями и владельцами жилых комплексов премиум-класса, так и с инвесторами, которые рассматривают недвижимость как инструмент для сохранения и приумножения капитала. Мы формируем ясную картину рынка и показываем, где лучше покупать, когда стоит продавать и какие стратегии принесут максимальный результат в долгосрочной перспективе.
              </p>
            </div>
          </LiquidGlass>
        </div>

        <KPIBlock />

        <div
          className={cn(
            'px-[18px] md:px-[32px] py-[60px]',
            '1_5xl:max-w-[1440px] 1_5xl:mx-auto xl:py-[80px]'
          )}
        >
          <LiquidGlass
            displacementScale={1200}
            blur={10}
            className={cn(
              'rounded-[20px] p-4',
              'max-w-[420px] w-full mx-auto',
              'sm:max-w-[500px]',
              'md:max-w-[700px]',
              'lg:max-w-[1000px]',
              'lg:px-8 lg:py-6'
            )}
          >
            <div
              className='flex flex-col gap-6'
            >
              <p
                className={cn(
                  'text-[16px] leading-[18px] font-medium tracking-[0.5px] opacity-80',
                  'sm:text-[18px]',
                  'xl:text-[20px] xl:leading-[22px]'
                )}
              >
                Для клиентов, планирующих инвестиции в премиальную недвижимость в 2025-2026 году, мы готовим прогноз цен в разных сегментах. Такой подход помогает понять, где целесообразнее покупать элитную квартиру под аренду, а где удерживать актив для последующей продажи.
              </p>

              <p
                className={cn(
                  'text-[16px] leading-[18px] font-medium tracking-[0.5px] opacity-80',
                  'sm:text-[18px]',
                  'xl:text-[20px] xl:leading-[22px]'
                )}
              >
                Мы подробно обсудим ваши цели, подготовим индивидуальный отчет и покажем, какие шаги помогут не только сохранить капитал, но и увеличить его в будущем. Чем раньше вы получите доступ к экспертному анализу, тем больше возможностей откроется для правильного выбора и успешных сделок на рынке премиальной недвижимости Москвы.
              </p>
            </div>
          </LiquidGlass>
        </div>

        <ReviewsBlock />

        <div
          className={cn(
            'px-[18px] md:px-[32px] py-[60px]',
            '1_5xl:max-w-[1440px] 1_5xl:mx-auto xl:py-[80px]'
          )}
        >
          <LiquidGlass
            displacementScale={1200}
            blur={10}
            className={cn(
              'rounded-[20px] p-4',
              'max-w-[420px] w-full mx-auto',
              'sm:max-w-[500px]',
              'md:max-w-[700px]',
              'lg:max-w-[1000px]',
              'lg:px-8 lg:py-6'
            )}
          >
            <div
              className='flex flex-col gap-6'
            >
              <h2
                className={cn(
                  'text-[20px] text-center font-semibold',
                  'sm:text-[22px]',
                  'xl:text-[26px]'
                )}
              >
                Преимущества услуги анализа рынка недвижимости VAMS SMART REALTY для клиентов
              </h2>

              <p
                className={cn(
                  'text-[16px] leading-[18px] font-medium tracking-[0.5px] opacity-80',
                  'sm:text-[18px]',
                  'xl:text-[20px] xl:leading-[22px]'
                )}
              >
                Результатом исследования рынка становится полноценный отчет, который помогает выстроить стратегию покупки или продажи. Консультация по вопросам рынка недвижимости от экспертов VAMS SMART REALTY включает прогнозные сценарии развития рынка, оценку ликвидности объектов и рекомендации по срокам сделок.
              </p>

              <p
                className={cn(
                  'text-[16px] mt-5 leading-[18px] font-medium tracking-[0.5px] opacity-80',
                  'sm:text-[18px]',
                  'xl:text-[20px] xl:leading-[22px]'
                )}
              >
                Сотрудничая с нами, клиент получает:
              </p>
            </div>
          </LiquidGlass>
        </div>

        <StepperBlock />
        <TeamBlock />

        <div
          className={cn(
            'px-[18px] md:px-[32px] pb-[60px]',
            '1_5xl:max-w-[1440px] 1_5xl:mx-auto xl:pb-[80px]'
          )}
        >
          <LiquidGlass
            displacementScale={1200}
            blur={10}
            className={cn(
              'rounded-[20px] p-4',
              'max-w-[420px] w-full mx-auto',
              'sm:max-w-[500px]',
              'md:max-w-[700px]',
              'lg:max-w-[1000px]',
              'lg:px-8 lg:py-6'
            )}
          >
            <div
              className='flex flex-col gap-6'
            >
              <h3
                className={cn(
                  'text-[20px] text-center font-semibold',
                  'sm:text-[22px]',
                  'xl:text-[26px]'
                )}
              >
                Если для вас важно видеть не только текущие цены, но и перспективы развития рынка, эксперты VAMS SMART REALTY готовы предложить профессиональную аналитику и персональные инвестиционные стратегии
              </h3>
            </div>
          </LiquidGlass>
        </div>

        <div className='flex flex-col xl:flex-col-reverse pb-[60px] overflow-hidden'>
          <ContactBlock />
          <ContactForm />
        </div>
      </div>
      <Footer />
    </div>
  )
}
