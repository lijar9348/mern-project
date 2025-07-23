// filepath: /d:/Demo Projects/mern-project/frontend/src/trpc.ts
import { createTRPCReact } from "@trpc/react-query";
// You need to share the AppRouter type between repos, typically via a shared package.
// For now, you can define a placeholder type:
import type { AppRouter } from "./../../backend/src/routes/index";

export const trpc = createTRPCReact<AppRouter>();
