/* eslint-disable @typescript-eslint/no-unused-vars */
import type * as trpcNext from "@trpc/server/adapters/next";
import { getIronSession, type IronSession } from "iron-session";
import { sessionOptions, IronSessionData } from "./session";

export interface Context {
  session: IronSession<IronSessionData>;
}

export async function createContext(opts: trpcNext.CreateNextContextOptions) {
  const session = await getIronSession<IronSessionData>(
    opts.req,
    opts.res,
    sessionOptions
  );
  const ctx: Context = {
    session,
  };
  return ctx;
}
