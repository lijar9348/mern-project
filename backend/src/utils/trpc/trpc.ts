import { initTRPC } from "@trpc/server";
import { Context } from "./context";

// Initialize tRPC
const t = initTRPC.context<Context>().create({
  /**
   * @see https://trpc.io/docs/v10/error-formatting
   */
  errorFormatter({ shape }) {
    return shape;
  },
});

// Export utilities
export const router = t.router;
export const publicProcedure = t.procedure;
