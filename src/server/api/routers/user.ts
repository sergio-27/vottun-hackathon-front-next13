import * as z from "zod";
//    return "https://wallet.vottun.io/?hash=$hash&username=$username";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

import { Prisma } from "@prisma/client";
import { createWallet } from "@/server/service-vottun/wallet-service";
import { getUser } from "@/server/web-hooks/user-web-hooks";

export const userRouter = createTRPCRouter({
      createUser: publicProcedure
      .input(z.object({ 
        username: z.string(),
        email: z.string()
    }))
      .mutation(async ({ ctx, input }) => {
        const createdUser = await ctx.db.user.create({
            data: {
              username: input.username,
              email: input.email,
              dni: "",
              walletAddress: ""
            },
          });
        console.log("createUserCall", createdUser);
        if (!createdUser) {
            throw new Error("Error creating user");
        }
        
        return createdUser;
      }),
      getUser: publicProcedure
      .input(z.object({ email: z.string() }))
      .query(({ ctx, input }) => {
        return getUser({
            prisma: ctx.db,
            email: input.email
        });
      }),
      getUserNewHash: publicProcedure
      .input(z.object({ email: z.string() }))
      .query(async ({ ctx, input }) => {


        return await createWallet({
            username: input.email,
            strategies: [2,3],
            callbackUrl: 'http://localhost:3000/testpage',
            fallbackUrl: 'http://localhost:3000/login',
            cancelUrl: 'http://localhost:3000/cancel'
        });
      }),
  });