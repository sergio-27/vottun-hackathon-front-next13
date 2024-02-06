import * as z from "zod";
//    return "https://wallet.vottun.io/?hash=$hash&username=$username";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

import { Prisma } from "@prisma/client";
import { createWallet } from "@/server/service-vottun/wallet-service";
import { getUser } from "@/server/web-hooks/user-web-hooks";
import { TRPCError } from "@trpc/server";

export const userRouter = createTRPCRouter({
  createUser: publicProcedure
    .input(
      z.object({
        username: z.string(),
        email: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      try {
        const createdUser = await ctx.db.user.create({
          data: {
            username: input.username,
            email: input.email,
            dni: "",
            walletAddress: "",
          },
        });
        console.log("createUserCall", createdUser);
        if (!createdUser) {
          throw new Error("Error creating user");
        }
  
        return { createdUser };
      } catch (ex) {
        throw new TRPCError({code: "CONFLICT", message: "Error al crear usuario"});
      }
      
    }),
  getUser: publicProcedure
    .input(z.object({ email: z.string() }))
    .query(({ ctx, input }) => {
      return getUser({
        prisma: ctx.db,
        email: input.email,
      });
    }),
  getUserNewHash: publicProcedure
    .input(z.object({ email: z.string() }))
    .mutation(async ({ ctx, input }) => {
      try {
        const getNewHashResponse = await createWallet({
          username: input.email,
          strategies: [2, 3],
          callbackUrl: "http://localhost:3000/communities",
          fallbackUrl: "http://localhost:3000/login",
          cancelUrl: "http://localhost:3000/login",
        });
        console.log("getNewHashResponse", getNewHashResponse);
        if (!getNewHashResponse) {
          throw new Error("Error creating user");
        }
  
        return { getNewHashResponse: getNewHashResponse, email: input.email };
      } catch (ex) {
        throw new TRPCError({code: "BAD_REQUEST", message: "Error al crear cartera"});
      }
     
    }),
});
