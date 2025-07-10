'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import Image from 'next/image';
import { cn } from '@/utils/cn';

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

export function Reviews() {
  return (
    <div
      style={{
        background: 'linear-gradient(158.29deg, #006B5B 5.78%, #02251F 79.69%)',
      }}
    >
      <section
        className={cn(
          'max-w-[var(--breakpoint-1_5xl)] 1_5xl:mx-auto',
          'rounded-[8px]',
          'pt-[80px] pb-[120px] px-[18px]',
        )}
      >
        <Swiper
          modules={[Pagination]}
          pagination={{
            el: '.swiper-custom-pagination',
            clickable: true,
            renderBullet: (index, className) =>
              `<span class="${className}"></span>`
          }}
          className="z-10"
          slidesPerView={1}
        >
          {reviews_config.map(slide => (
            <SwiperSlide key={slide.title}>
              <div
                className={cn(
                  'flex flex-col items-center rounded-[8px] z-2',
                  'p-[64px_24px] gap-[100px] w-[324px] h-[579px]',
                  'md:p-[36px_24px] md:gap-[100px] md:w-[330px] md:h-[571px]',
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
                    {slide.title}
                  </h3>
                  <p
                    className={cn(
                      'font-geist text-[#F0F4F9]',
                      'font-semibold text-[14px] leading-[130%] w-[276px] h-[162px] max-h-[162px] bg-red-500',
                      'md:font-medium md:text-[16px] md:leading-[130%] md:w-[282px] md:h-[210px]'
                    )}
                  >
                    {slide.desc}
                  </p>
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
                    src={slide.img}
                    className='rounded-full object-cover'
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
    </div>
  );
}
