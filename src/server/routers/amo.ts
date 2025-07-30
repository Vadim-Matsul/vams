import { router, publicProcedure } from '../trpc';
import { z } from 'zod';
import { amoRequest } from '@/lib/amoreal';

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
      console.log(input);
      const { name, ...custom_fields_values } = input;

      try {
        const response = await amoRequest('/contacts', 'POST', [
          {
            name,
            custom_fields_values,
          },
        ]);
        return response;
      } catch (err) {
        console.error(`Ошибка addContact`, err);
        throw new Error('unknown error');
      }
    }),
});
