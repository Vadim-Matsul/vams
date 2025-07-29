'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import Image from 'next/image';
import { cn } from '@/utils/cn';
import { ScrollShadow } from '@/ui/scroll_shadow';
import { ParallaxCard } from '@/ui/ParallaxCard';
import { GlareHover } from '@/bits/GlareHover';
import { SplitText } from '@/bits/SplitText';

const reviews_config = [
  {
    title: 'Сразу говорили о возможных рисках',
    desc: 'Работаю с несколькими агентствами, но VRS — единственные, кто предложил объекты, которые за год выросли на 24%, хотя рынок в целом просел. Всегда на связи. Документально всё открыто и понятно. Особенно ценю их честность — сразу говорили о возможных рисках.',
    name: 'Андрей М.',
    profession: 'Инвестор в недвижимость',
    img: '/images/review_andrew.png'
  },
  {
    title: 'Нашли именно то, что искали, без суеты',
    desc: 'Мы с женой планировали переехать в новый район. Счастливая случайность, и вот мы в руках менеджера VSR. Антон выслушал наши пожелания и подобрал несколько хороших вариантов. Никакого навязывания, только дельные советы. В итоге нашли именно то, что искали, без суеты. Купили квартиру, которая полностью устраивает и по расположению, и по планировке. Весь процесс от подбора до оформления занял меньше месяца.',
    name: 'Сергей С. и Елена С.',
    profession: 'Молодая семья',
    img: '/images/review_serg_and_elena.png'
  },
  {
    title: 'Приятно удивил индивидуальный подход',
    desc: 'Как человек, который ценит своё время, я требовал от агентства чёткости и компетентности. VSR оправдали ожидания: предоставили исчерпывающую информацию по каждому объекту, организовали просмотры в удобное время, взяли на себя все юридические вопросы. Приятно удивил индивидуальный подход — учитывали даже такие нюансы, как наличие охраняемой территории и инфраструктуры для деловых встреч.',
    name: 'Михаил Б.',
    profession: 'Руководитель компании',
    img: '/images/review_mich.png'
  },
]

const options = {
  delay: 30,
  duration: 0.5,
  ease: "power3.out",
  splitType: "words",
  from: { opacity: 0, y: 20 },
  to: { opacity: 1, y: 0 },
  threshold: 0,
  rootMargin: "0px",
  textAlign: "center",
} as const;

export function ReviewsBlock() {

  return (
    <div
      style={{
        background: 'linear-gradient(158.29deg, #006B5B 5.78%, #02251F 79.69%)',
      }}
      className='overflow-hidden relative'
    >
      <section
        key='slider'
        className={cn(
          'xl:hidden',
          'max-w-[var(--breakpoint-1_5xl)] 1_5xl:mx-auto',
          'rounded-[8px]',
          'pt-[80px] pb-[120px] px-[18px]',
        )}
      >
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{
            el: '.swiper-custom-pagination',
            clickable: true,
            renderBullet: (index, className) =>
              `<span class="${className}"></span>`
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          className="z-10 w-[330px]"
          slidesPerView={1}
        >
          {reviews_config.map(slide => (
            <SwiperSlide key={slide.title}>
              <div
                className={cn(
                  'flex flex-col items-center rounded-[8px] z-2',
                  'p-[64px_24px] gap-[100px] w-[330px] h-[579px]',
                  'md:p-[36px_24px] md:gap-[100px] md:h-[571px]',
                )}
                style={{
                  background: 'rgba(78,231,207,0.06)',
                  boxShadow: '0px 4px 30px rgba(0,9,69,0.05)',
                  backdropFilter: 'blur(30px)'
                }}>
                <div
                  className={cn(
                    'flex flex-col items-start',
                    'gap-[48px] w-[276px] h-[306px]',
                    'md:gap-[48px] md:w-[282px] md:h-[354px]'
                  )}
                >
                  <h3
                    className={cn(
                      'font-unbounded font-medium text-center text-[#F0F4F9]',
                      'w-[276px] h-[96px] text-[24px] leading-[100%]',
                      'md:w-[282px] md:h-[96px] md:text-[24px] md:leading-[100%]'
                    )}
                  >

                    <SplitText
                      {...options}
                      duration={1}
                      threshold={0.7}
                      splitType='words'
                      text={slide.title}
                    />
                  </h3>
                  <ScrollShadow
                    topShadowClassName='to-[#036052B3] md:to-[#004d42B3]'
                    bottomShadowClassName='to-[#064a41] md:to-[#003e34]'
                    className={cn(
                      // 'bg-blue-500',
                      'h-[170px] max-h-[170px]',
                      'md:h-[210px] md:max-h-[210px]'
                    )}
                  >
                    <p
                      className={cn(
                        'font-geist text-[#F0F4F9]',
                        'font-semibold text-[14px] leading-[130%]',
                        'md:font-medium md:text-[16px] md:leading-[130%]'
                      )}
                    >
                      {slide.desc}
                    </p>
                  </ScrollShadow>
                </div>
                <div
                  className={cn(
                    'flex flex-row items-center gap-[24px]',
                    'w-[276px] h-[45px]',
                    'md:w-[282px] md:h-[45px]'
                  )}
                >
                  <Image
                    width={45}
                    height={45}
                    sizes='full'
                    src={slide.img}
                    quality={100}
                    draggable={false}
                    className={cn(
                      'rounded-full object-cover select-none',
                      'min-w-[45px] max-w-[45px] w-[45px] min-h-[45px] max-h-[45px] h-[45px]',
                    )}
                    alt={slide.name}
                  />
                  <div className="flex flex-col justify-center">
                    <span className={cn(
                      'font-geist font-semibold text-[14px] leading-[130%] text-[#F0F4F9]',
                      'md:font-semibold md:text-[14px] md:leading-[130%] md:text-[#F0F4F9]'
                    )}>
                      {slide.name}
                    </span>
                    <span className={cn(
                      'font-geist font-semibold text-[14px] leading-[130%] text-[#F0F4F9] opacity-70',
                      'md:font-semibold md:text-[14px] md:leading-[130%] md:text-[#F0F4F9] md:opacity-70'
                    )}>
                      {slide.profession}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div
          className={cn(
            "mx-auto swiper-custom-pagination z-10",
            'flex flex-row justify-center items-center gap-[6px]',
            'w-[48px] h-[8px] mt-9'
          )}
        />
        <style>{`
          .swiper-pagination-bullet {
            width: 8px;
            min-width: 8px;
            height: 8px;
            border-radius: 8px;
            background: #fff;
            opacity: 0.25;
            margin: 0 3px !important;
            transition: all 0.2s;
            cursor: pointer;
          }
          .swiper-pagination-bullet-active {
            width: 20px;
            min-width: 20px;
            opacity: 1;
            background: #fff;
            cursor: pointer;
          }
        `}</style>
      </section>

      <section
        key='blocks'
        className={cn(
          'hidden xl:block',
          'max-w-[var(--breakpoint-1_5xl)] 1_5xl:mx-auto',
          'rounded-[8px]',
          'pt-[120px] pb-[180px]',
          '1_5xl:px-[100px]'
        )}
      >
        <div className="pointer-events-none absolute z-0"
          style={{
            width: 838, height: 831,
            left: 775, top: 379,
            background: 'rgba(0,119,144,0.18)',
            filter: 'blur(149.643px)',
            borderRadius: 999,
            transform: 'rotate(64.96deg)',
          }}
        />
        <div className="pointer-events-none absolute z-1"
          style={{
            width: 838, height: 831,
            left: -235, top: -214,
            background: 'rgba(3,103,125,0.18)',
            filter: 'blur(149.643px)',
            borderRadius: 999,
            transform: 'rotate(64.96deg)',
          }}
        />

        <h2
          className={cn(
            "z-2 font-unbounded font-medium text-[36px] leading-[102%]",
            "text-[#ECF0F6] text-center mb-[90px]"
          )}
        >
          <SplitText
            {...options}
            duration={1}
            threshold={0.3}
            text='Отзывы'
          />
        </h2>

        <div
          className={cn(
            "z-3 flex mx-auto flex-row justify-center items-start gap-[16px] w-full",
            'max-w-[1202px] min-h-[618px]',
            "flex-wrap"
          )}
        >
          {reviews_config.map((review) => (
            <div
              key={review.title}
              className={cn(
                "w-[389.33px] h-[618px] min-w-[300px]",
              )}
            >
              <ParallaxCard>
                <GlareHover
                  glareColor="#ffffff"
                  glareOpacity={0.4}
                  glareAngle={-30}
                  glareSize={300}
                  transitionDuration={2000}
                  playOnce={false}
                >
                  <div
                    className={cn(
                      "flex flex-col items-center justify-between",
                      "rounded-[8px] bg-[rgba(78,231,207,0.06)] shadow-[0_4px_30px_rgba(0,9,69,0.05)] backdrop-blur-[30px]",
                      "p-[64px_24px] gap-[100px]",
                      "w-full h-fit",
                      "box-border"
                    )}
                  >
                    <div className="flex flex-col items-start gap-[48px] w-[341.33px] h-[342px]">
                      <h3 className="font-unbounded font-medium text-[24px] leading-[110%] text-[#F0F4F9] text-center w-full h-[78px] mb-0">
                        <SplitText
                          {...options}
                          threshold={0.3}
                          text={review.title}
                        />
                      </h3>

                      <ScrollShadow
                        className={cn(
                          'h-[216px] max-h-[216px]'
                        )}
                      >
                        <p className="font-geist font-medium text-[18px] leading-[136%] text-[#F0F4F9] w-full mb-0 text-left">
                          {review.desc}
                        </p>
                      </ScrollShadow>
                    </div>
                    <div className="flex flex-row items-start gap-[24px] w-[341.33px] h-[48px] mt-auto">
                      <Image
                        src={review.img}
                        width={45}
                        height={45}
                        quality={100}
                        sizes='full'
                        alt={review.name}
                        draggable={false}
                        className={cn(
                          "rounded-full object-cover border border-black select-none",
                          'min-w-[45px] max-w-[45px] w-[45px] min-h-[45px] max-h-[45px] h-[45px]',
                        )}
                      />
                      <div className="flex flex-col justify-center w-[272.33px] h-[48px]">
                        <span className="font-geist font-medium text-[18px] leading-[136%] text-[#F0F4F9]">{review.name}</span>
                        <span className="font-geist font-medium text-[18px] leading-[136%] text-[#F0F4F9] opacity-80">{review.profession}</span>
                      </div>
                    </div>
                  </div>
                </GlareHover>
              </ParallaxCard>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
