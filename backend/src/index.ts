import express from "express";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { appRouter } from "./routes/index";
import { createContext } from "./utils/trpc/context";
import cors from "cors";

const app = express();

app.use(cors());

app.use(
  "/trpc",
  createExpressMiddleware({
    router: appRouter,
    createContext: createContext,
  })
);

app.listen(4000, () => {
  console.log("tRPC API server listening on http://localhost:4000/trpc");
});
