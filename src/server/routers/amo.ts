import { router, publicProcedure } from '../trpc';
import { z } from 'zod';
import { amoRequest } from '@/lib/amoreal';
import { TRPCError } from '@trpc/server';

const VAMS_tag = 'VamsRealty - landing';

export const amoRouter = router({
  addContact: publicProcedure
    .input(
      z.object({
        name: z.string().min(1),
        phone: z.string().min(1),
        agreeMarketing: z.boolean(),
        agreePolitics: z.boolean(),
        contactType: z.object({
          call: z.boolean(),
          telegram: z.boolean(),
          whatsapp: z.boolean(),
        }),
      }),
    )
    .mutation(async ({ input }) => {
      try {
        /** Создание заявки */
        const createResponse = await amoRequest('/contacts', 'POST', [
          {
            name: input.name,
            custom_fields_values: [
              {
                field_id: 204027,
                values: [{ value: input.phone, enum_id: 119089 }],
              },
              {
                field_id: 259595,
                values: [{ value: input.agreePolitics }],
              },
            ],
            _embedded: {
              tags: [{ name: VAMS_tag }],
            },
          },
        ]);

        const contactId = createResponse?._embedded?.contacts?.[0]?.id;

        /** Создание задачи к заявке */
        const taskResponse = await amoRequest('/tasks', 'POST', [
          {
            entity_id: contactId,
            entity_type: 'contacts',
            text: `Связаться с клиентом ${input.name} (с сайта)`,
            complete_till: generateMoscowTimestamp(),
          },
        ]);

        /** Создание задачи к заявке */
        const comment = `
          Лид: ${input.name}
          Телефон: ${input.phone}

          Согласен на звонок: ${input.contactType.call ? 'ДА' : 'НЕТ'}
          Согласен на telegram: ${input.contactType.telegram ? 'ДА' : 'НЕТ'}
          Согласен на whatsapp: ${input.contactType.whatsapp ? 'ДА' : 'НЕТ'}

          Согласие на маркетинг: ${input.agreeMarketing ? 'ДА' : 'НЕТ'}
          Согласие на обработку данных: ${input.agreePolitics ? 'ДА' : 'НЕТ'}
        `;
        const commentResponse = await amoRequest(`/contacts/${contactId}/notes`, 'POST', [
          {
            note_type: 'common',
            params: {
              text: comment,
            },
          },
        ]);

        return {
          success: true,
          contactId,
          taskId: taskResponse?.id ?? null,
          noteId: commentResponse?.id ?? null,
        };
      } catch (err) {
        // @ts-expect-error "____"
        console.error('Ошибка создания заявки', err?.response?.data || err);
        throw new TRPCError({
          code: 'BAD_REQUEST',
          // @ts-expect-error "____"
          message: err?.response?.data?.detail || 'Ошибка интеграции с amoCRM',
        });
      }
    }),
});

/**
 * Генерация UNIX timestamp для amoCRM complete_till
 * @param {number} offsetSeconds - через сколько секунд от текущего времени (по умолчанию сразу)
 * @returns {number} - timestamp (секунды)
 */
function generateMoscowTimestamp(offsetSeconds = 0) {
  // текущее UTC время в миллисекундах
  const nowUtc = Date.now();

  // смещение Москвы = UTC+3 → в миллисекундах
  const moscowOffset = 3 * 60 * 60 * 1000;

  // получаем "сейчас" в Москве
  const nowMoscow = new Date(nowUtc + moscowOffset);

  // добавляем оффсет, если нужен (например, +1 час)
  const futureTime = new Date(nowMoscow.getTime() + offsetSeconds * 1000);

  // возвращаем UNIX timestamp в секундах
  return Math.floor(futureTime.getTime() / 1000);
}
