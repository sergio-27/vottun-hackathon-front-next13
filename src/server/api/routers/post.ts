import * as z from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";


export const postRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(async ({ input }) => {
       
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  create: publicProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      // simulate a slow db call
      /*const response = await transferERC20(
        {
          contractAddress: "0xd01a4c8baf61e83d4dc41197b99fe23eee0cee4f",
          amount: BigInt(1000000000000000000000),
          network: 80001,
          recipient: "0xdD646ca2F2eA6ee405dd0AC7E4F7aD5318AEae56",
          gasLimit: 6000000
        }
      );*/
  
      return ctx.db.post.create({
        data: {
          name: input.name,
        },
      });
    }),

  getLatest: publicProcedure.query(({ ctx }) => {
    return ctx.db.post.findFirst({
      orderBy: { createdAt: "desc" },
    });
  }),
});