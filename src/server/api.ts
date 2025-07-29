import { router } from './trpc';
import { sendContactsRouter } from './routers/example';

export const appRouter = router({
  sendContact: sendContactsRouter,
});

export type AppRouter = typeof appRouter;
