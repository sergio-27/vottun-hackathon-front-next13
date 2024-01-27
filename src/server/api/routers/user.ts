import * as z from "zod";
//    return "https://wallet.vottun.io/?hash=$hash&username=$username";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { createUser, getUser } from "@/server/web-hooks/user-web-hooks";
import { Prisma } from "@prisma/client";

export const userRouter = createTRPCRouter({
      createUser: publicProcedure
      .input(z.object({ 
        username: z.string(),
        email: z.string()
    }))
      .mutation(async ({ ctx, input }) => {

        const createUserCall = await createUser({
            prisma: ctx.db,
            email: input.email,
            userName: input.username
        });
        console.log("createUserCall", createUserCall);
        /*if (!createUserCall) {
            throw new Error("Error creating user");
        }*/
        
        return createUserCall;
      }),
      getUser: publicProcedure
      .input(z.object({ email: z.string() }))
      .query(({ ctx, input }) => {
        return getUser({
            prisma: ctx.db,
            email: input.email
        });
      }),
  });