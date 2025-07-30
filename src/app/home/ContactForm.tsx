
'use client';
import { cn } from '@/utils/cn'
import { IMaskInput } from 'react-imask';
import { useForm, Controller } from 'react-hook-form';
import { CustomCheckbox } from '@/ui/checkbox/CustomCheckbox';
import { Fragment, useState } from 'react';
import { homeBlockIDs } from '@/configs/homeBlockIds';
import Lottie from 'lottie-react';
import LottieSuccessJSON from '../../../public/lottie/lottie_success.json';
import { AnimatePresence, motion } from 'motion/react';
import { trpc } from '@/lib/trpc';
import z from 'zod';

type Props = {}

const contactOptions = [
  { label: 'Звонок', value: 'call' },
  { label: 'Telegram', value: 'telegram' },
  { label: 'WhatsApp', value: 'whatsapp' },
] as const;

type FormValues = {
  name: string;
  phone: string;
  contactType: (typeof contactOptions[number]['value'])[];
  agreePolitics: boolean;
  agreeMarketing: boolean;
};

export function ContactForm({ }: Props) {
  const sendContactFormMutation = trpc.amoRouter.addContact.useMutation();

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    mode: 'onChange',
    defaultValues: {
      name: '',
      phone: '',
      contactType: [],
      agreePolitics: false,
      agreeMarketing: true,
    },
  });

  const onSubmit = (data: FormValues) => {
    sendContactFormMutation.mutate({
      name: data.name,
      phone: data.phone,
      agreeMarketing: data.agreeMarketing,
      agreePolitics: data.agreePolitics,
      contactType: {
        call: data.contactType.includes('call'),
        telegram: data.contactType.includes('telegram'),
        whatsapp: data.contactType.includes('whatsapp'),
      }
    })
  };

  const isSuccess = sendContactFormMutation.isSuccess;
  const isPending = sendContactFormMutation.isPending;
  const disableSubmitBtn = !isValid || isPending;

  const Title = <p
    className={cn(
      'font-unbounded font-medium text-custom-brand-200',
      'text-[20px] leading-[110%] w-[324px]',
      'md:w-[428px]',
      '1_5lg:'
    )}
  >

    Оставьте свои данные
    и менеджеры свяжутся
    с Вами
  </p>

  const InputsWrapper = <div
    className={cn(
      'flex',
      'flex-col gap-3 mt-8',
      'md:mt-9 md:w-[397px]',
      '1_5lg:flex-row 1_5lg:justify-between 1_5lg:gap-9 1_5lg:w-full 1_5lg:mt-0'
    )}
  >
    <Controller
      name='name'
      control={control}
      rules={{
        validate: value => value.trim().length > 0
      }}
      render={({ field: { onChange, onBlur, value } }) => (
        <input
          placeholder='Имя'
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          data-error={Boolean(errors.name)}
          disabled={isPending}
          className={cn(
            cn(
              'bg-white',
              'transition-all outline-none',
              'px-4 py-[15px] rounded-[8px]'
            ),
            cn(
              'placeholder:text-[17px] placeholder:text-custom-grey-200',
              'placeholder:-tracking-[0.4px] placeholder:font-geist',
              'placeholder:font-[400]'
            ),
            cn(
              'text-custom-brand-200 text-[17px] leading-[17px] font-[400]',
              'caret-custom-brand-200 placeholder:-tracking-[0.4px] font-geist',
              'capitalize'
            ),
            '',
            cn(
              'data-[error=true]:border-[1px] data-[error=true]:border-error'
            ),
            cn(
              'disabled:opacity-50'
            ),
            'w-full h-[52px]',
          )}
        />
      )}
    />

    <Controller
      name="phone"
      control={control}
      rules={{
        required: true,
        pattern: {
          value: /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/,
          message: 'Формат: +7 (999) 999-99-99',
        },
      }}
      render={({ field: { onChange, onBlur, value, ref } }) => (
        <IMaskInput
          mask="+{7} (000) 000-00-00"
          value={value}
          inputRef={ref}
          onAccept={onChange}
          onBlur={onBlur}
          disabled={isPending}
          data-error={Boolean(errors.phone)}
          unmask={false}
          inputMode="tel"
          placeholder="Телефон"
          className={cn(
            cn(
              'bg-white',
              'transition-all outline-none',
              'px-4 py-[15px] rounded-[8px]'
            ),
            cn(
              'placeholder:text-[17px] placeholder:text-custom-grey-200',
              'placeholder:-tracking-[0.4px] placeholder:font-geist',
              'placeholder:font-[400]'
            ),
            cn(
              'text-custom-brand-200 text-[17px] leading-[17px] font-[400]',
              'caret-custom-brand-200 placeholder:-tracking-[0.4px] font-geist',
              'capitalize'
            ),
            '',
            cn(
              'data-[error=true]:border-[1px] data-[error=true]:border-error'
            ),
            cn(
              'disabled:opacity-50'
            ),
            'w-full h-[52px]',
          )}
        />
      )}
    />
  </div>

  const ContactType = <div
    className={cn(
      'flex',
      'mt-8 gap-3',
      'md:mt-9 md:gap-10',
      '1_5lg:mt-0 1_5lg:gap-6 1_5lg:-translate-y-[11px]'
    )}
  >
    <Controller
      name='contactType'
      control={control}
      rules={{
        validate: value => value.length > 0 || "Выберите хотя бы один способ связи",
      }}
      render={({ field }) => (
        <>
          {contactOptions.map(option => {
            const checked = field.value.includes(option.value);
            const disabled = field.disabled || isPending;
            const error = Boolean(errors.contactType)

            return (
              <div
                key={option.value}
                className={cn(
                  'flex gap-1 items-center',
                  'md:gap-3'
                )}
              >
                <div className='w-10 h-10 flex items-center justify-center'>
                  <CustomCheckbox
                    value={option.value}
                    checked={checked}
                    disabled={disabled}
                    error={error}
                    onChange={() => {
                      const nextChecked = !checked;
                      field.onChange(
                        nextChecked
                          ? [...field.value, option.value]
                          : field.value.filter(v => v !== option.value)
                      )
                    }}
                  />
                </div>

                <p
                  onClick={() => {
                    if (disabled) return;

                    const nextChecked = !checked;
                    field.onChange(
                      nextChecked
                        ? [...field.value, option.value]
                        : field.value.filter(v => v !== option.value)
                    )
                  }}
                  className={cn(
                    'text-custom-brand-100 font-geist',
                    disabled ? 'cursor-not-allowed' : 'cursor-pointer',
                    'text-[14px]'
                  )}
                >
                  {option.label}
                </p>
              </div>
            )
          })}
        </>
      )}
    />
  </div>

  const SubmitButton = <div
    className={cn(
      'mt-[24px] w-full h-[56px]',
      'md:w-[397px]',
      '1_5lg:w-full 1_5lg:mt-0 1_5lg:-translate-y-[20px]',

    )}
  >
    <button
      type='submit'
      disabled={disableSubmitBtn}
      style={{
        overflow: 'hidden'
      }}
      className={cn(
        cn(
          'relative',
          'transition-all cursor-pointer',
          'w-full h-full bg-custom-brand-100 rounded-[8px]',
          'px-[28px] py-3',
        ),
        cn(
          'hover:scale-[.95]'
        ),
        isPending
          ? cn(
            'disabled:hover:scale-[1] disabled:focus:scale-[1] disabled:cursor-auto'
          )
          : cn(
            'disabled:cursor-auto',
            'disabled:bg-custom-grey-100',
            'disabled:hover:scale-[1] disabled:focus:scale-[1]'
          )
      )}
    >
      <p
        className={cn(
          'font-geist ',
          'text-[18px]',
          isPending ? cn(
            'text-white'
          ) : (
            disableSubmitBtn ? 'text-custom-grey-200' : 'text-white'
          )
        )}
      >
        Свяжитесь со мной
      </p>

      {isPending && (
        <Fragment key='shimmer'>
          <div
            key='loading shimmer'
            className={cn(
              'animate-shine',
              'rotate-[10deg]',
              "absolute -inset-[90%] bg-gradient-to-r from-transparent via-white/70 to-transparent",
            )}
          />

          <style
            key='style for loading shimmer'
            jsx
          >
            {`
                    @keyframes shine {
                      0% { transform: translateX(-100%); }
                      100% { transform: translateX(100%); }
                    }
                    .animate-shine {
                      animation: shine 2.5s infinite linear;
                      background-size: 200% 100%;
                      background-repeat: no-repeat;
                      background-position: left top;
                      pointer-events: none;
                    }
                  `}
          </style>
        </Fragment>
      )}
    </button>
  </div>

  const AgreeCheckboxes = <div
    className={cn(
      'flex',
      'mt-[32px] flex-col gap-[14px]',
      'flex-row flex-wrap justify-between',
      'md:mt-9 md:flex-col',
      '1_5lg:mt-0 1_5lg:gap-0'
    )}
  >
    <div
      key='agreePolitics'
      className={cn(
        'flex',
        'gap-[14px]',
        '1_5lg:items-center'
      )}
    >
      <Controller
        name='agreePolitics'
        control={control}
        rules={{ required: true }}
        render={({ field }) => {
          const checked = field.value;
          const disabled = field.disabled || isPending;
          const error = Boolean(errors.agreePolitics)

          return (
            <>
              <div
                className={cn(
                  'w-10 h-10',
                  'items-center justify-center flex',
                )}
              >
                <CustomCheckbox
                  checked={checked}
                  disabled={disabled}
                  error={error}
                  onChange={() => {
                    field.onChange(!checked)
                  }}
                />
              </div>

              <p
                className={cn(
                  'font-geist text-custom-grey-300',
                  'text-[12px] w-[210px]',
                  '1_5lg:w-full'
                )}
              >
                Я согласен с&nbsp;
                <a
                  href="#"
                  className='inline underline hover:opacity-80 focus:opacity-80 transition-all'
                >
                  Условиями обработки персональных данных
                </a>
                &nbsp;и&nbsp;
                <a
                  href="#"
                  className='inline underline hover:opacity-80 focus:opacity-80 transition-all'
                >
                  Политикой конфиденциальности
                </a>
              </p>
            </>
          )
        }}
      />
    </div>

    <div
      key='agreeMarketing'
      className={cn(
        'flex',
        'gap-[14px]',
        'md:items-center'
      )}
    >
      <Controller
        name='agreeMarketing'
        control={control}
        render={({ field }) => {
          const checked = field.value;
          const disabled = field.disabled || isPending;

          return (
            <>
              <div
                className={cn(
                  'w-10 h-10',
                  'items-center justify-center flex'
                )}
              >
                <CustomCheckbox
                  checked={checked}
                  disabled={disabled}
                  onChange={() => {
                    field.onChange(!checked)
                  }}
                />
              </div>

              <p
                className={cn(
                  'font-geist text-custom-grey-300',
                  'text-[12px] w-[190px]',
                  'md:w-[355px]'
                )}
              >
                Я согласен получатьс&nbsp;
                <a
                  href="#"
                  className='inline underline hover:opacity-80 focus:opacity-80 transition-all'
                >
                  рассылку рекламных материалов
                </a>
              </p>
            </>
          )
        }}
      />
    </div>
  </div>

  return (
    <section
      id={homeBlockIDs.CONTACT_FORM}
      className={cn(
        'max-w-[var(--breakpoint-1_5xl)] 1_5xl:mx-auto',
        'px-[18px] pt-10 max-w-[560px] mx-auto',
        'md:w-[460px] md:max-w-none',
        '1_5lg:w-auto 1_5lg:px-[32px] 1_5lg:py-[85px]',
        '1_5xl:px-[100px]'
      )}
    >
      <AnimatePresence mode='popLayout'>
        {!isSuccess && (
          <motion.form
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            onSubmit={handleSubmit(onSubmit)}
            className={cn(
              'mx-auto',
              '1_5xl:w-[1240px]'
            )}
          >
            <div className='1_5lg:hidden' >
              {Title}
              {InputsWrapper}
              {ContactType}
              {SubmitButton}
              {AgreeCheckboxes}
            </div>

            <div
              className={cn(
                'hidden 1_5lg:flex',
                'flex-row justify-between h-[240px]'
              )}
            >
              <div
                className={cn(
                  'w-[694px] h-full',
                  'flex flex-col justify-between gap-[32px]'
                )}
              >
                {Title}
                {InputsWrapper}
                {AgreeCheckboxes}
              </div>
              <div
                className={cn(
                  'w-[390px] h-full',
                  'flex flex-col justify-between gap-10'
                )}
              >
                <p
                  className={cn(
                    'font-unbounded font-medium text-custom-brand-200',
                    'text-[20px] leading-[110%]',
                  )}
                >

                  Предпочтительный<br />
                  способ&nbsp;связи
                </p>

                {ContactType}
                {SubmitButton}
              </div>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
      <AnimatePresence mode='popLayout'>
        {isSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Lottie
              animationData={LottieSuccessJSON}
              loop={false}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
