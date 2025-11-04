import { Footer } from '@/components/footer/Footer';
import { Header } from '@/components/header/Header';
import { Breadcrumbs } from './Breadcrumbs';
import { HeroBlock } from './HeroBlock';
import { cn } from '@/utils/cn';
import { LiquidGlass } from '@/ui/LiquidGlass';
import { KPIBlock } from './KPIBlock';
import { ReviewsBlock } from '@/app/home/ReviewsBlock';
import { StepperBlock } from './StepperBlock';
import { TeamBlock } from '@/app/home/TeamBlock';
import { ContactBlock } from '@/app/home/ContactBlock';
import { ContactForm } from '@/app/home/ContactForm';


export default function RealEstateSupport() {

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
                Зачем нужно юридическое сопровождение сделки с недвижимостью
              </h2>

              <p
                className={cn(
                  'text-[16px] leading-[18px] font-medium tracking-[0.5px] opacity-80',
                  'sm:text-[18px]',
                  'xl:text-[20px] xl:leading-[22px]'
                )}
              >
                Любая операция с недвижимостью связана с крупными вложениями и высокими рисками. Ошибки в документах, ограничения на объект или недобросовестность другой стороны могут привести к потере собственности или судебным спорам. Именно поэтому клиенты обращаются в VAMS за профессиональной юридической поддержкой. Мы знаем, что человеку важна не только успешная покупка или продажа, но и уверенность в том, что сделка защищена на всех уровнях. Наши специалисты помогают подготовить и проверить документы при покупке квартиры, контролируют все этапы сделки и дают гарантию правовой безопасности.
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
                Услуги и стоимость юридического сопровождения сделки с недвижимостью
              </h2>

              <p
                className={cn(
                  'text-[16px] leading-[18px] font-medium tracking-[0.5px] opacity-80',
                  'sm:text-[18px]',
                  'xl:text-[20px] xl:leading-[22px]'
                )}
              >
                Правовое сопровождение включает не только подготовку бумаг, но и активное участие юриста в переговорах, согласовании условий и оформлении договора купли-продажи. Специалисты VAMS контролируют корректность формулировок, фиксируют обязательства сторон и следят за регистрацией сделки в государственных органах. При этом стоимость юридического сопровождения сделки всегда формируется прозрачно. Клиент заранее знает, какова цена сопровождения и какие действия выполнит юрист. Такой подход исключает скрытые расходы и делает процесс предсказуемым.
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
                Преимущества юридического сопровождения сделок с недвижимостью в VAMS
              </h2>

              <p
                className={cn(
                  'text-[16px] leading-[18px] font-medium tracking-[0.5px] opacity-80',
                  'sm:text-[18px]',
                  'xl:text-[20px] xl:leading-[22px]'
                )}
              >
                Наше агентство объединяет юридическую экспертизу и практический опыт работы с недвижимостью премиального сегмента. Юридическая проверка недвижимости дополняется аналитикой рынка, что позволяет учитывать не только правовые, но и инвестиционные аспекты сделки. Полное юридическое сопровождение операций с недвижимостью включает подготовку полного пакета документов для покупки квартиры, помощь юриста при сделке и защиту интересов клиента в работе с банками, застройщиками и госорганами. Такой подход ценят инвесторы и частные покупатели, для которых важны безопасность и прозрачность.
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
                Хотите быть уверены, что ваша сделка пройдет без ошибок и скрытых рисков? Обратитесь в VAMS - мы обеспечим юридическую защиту, прозрачность и контроль на каждом этапе сделки.
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

