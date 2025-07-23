import { publicProcedure } from "../../utils/trpc/trpc";

export default publicProcedure.query(() => {
  return {
    userDetails: {
      nameFirst: "John",
      nameLast: "Doe",
    },
  };
});
