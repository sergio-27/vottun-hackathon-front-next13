import * as z from "zod";
//    return "https://wallet.vottun.io/?hash=$hash&username=$username";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const userRouter = createTRPCRouter({
      createUser: publicProcedure
      .input(z.object({ 
        username: z.string(),
        email: z.string()
    }))
      .mutation(async ({ ctx, input }) => {
        
        return ctx.db.user.create({
          data: {
            username: input.username,
            email: input.email,
            dni: "",
            walletAddress: ""
          },
        });
      })
  });