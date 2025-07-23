import { router } from "../utils/trpc/trpc";
import user from "./../routes/user";

export const appRouter = router({
  user,
});

export type AppRouter = typeof appRouter;
