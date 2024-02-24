import { propertyRouter } from './routers/property.router';
import { router } from './trpc';

export const appRouter = router({
  property: propertyRouter,
});

export type AppRouter = typeof appRouter;
