import * as z from "zod";
//    return "https://wallet.vottun.io/?hash=$hash&username=$username";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

import { Prisma } from "@prisma/client";
import { createWallet } from "@/server/service-vottun/wallet-service";
import { getUser } from "@/server/web-hooks/user-web-hooks";
import { deploySmartContract } from "@/server/service-vottun/web3-core-service";

export const communityRouter = createTRPCRouter({
      createUser: publicProcedure
      .input(z.object({ 
        ownerId: z.number(),
        communityName: z.string(),
        contractAddress: z.string(),
        hasProposal: z.boolean(),
        hasSharedPayment: z.boolean(),
        hasChat: z.boolean()
    }))
      .mutation(async ({ ctx, input }) => {
        const createCommunity = await ctx.db.community.create({
            data: {
              ownerId: input.ownerId,
              communityName: input.communityName,
              contractAddress: input.contractAddress,
              hasProposal: input.hasProposal,
              hasSharedPayment: input.hasSharedPayment,
              hasChat: input.hasChat,
            },
          });
        console.log("createCommunity", createCommunity);
        if (!createCommunity) {
            throw new Error("Error creating community");
        }
        
        return createCommunity;
      }),
      deploySmartContract: publicProcedure
      .input(z.object({ 
        ownerId: z.number(),
        communityName: z.string(),
        contractAddress: z.string(),
        hasProposal: z.boolean(),
        hasSharedPayment: z.boolean(),
        hasChat: z.boolean(),
        adminAddress: z.string(),
        
      }))
      .query(async ({ ctx, input }) => {


        return await deploySmartContract({
            contractSpecsId: 12083,
            sender: "0x84fa37c1b4d9dbc87707e47440eae5285edd8e58",
            blockchainNetwork: 80001,
            gasLimit: 4000000,
            alias: 'CommunityContract#1',
            params: [
              input.adminAddress,
              !input.hasChat ? 2 : 1,
              !input.hasProposal ? 2 : 1,
              2,
              !input.hasSharedPayment ? 2 : 1,
              1,
              1,
              1,
              1
            ]
        });
      }),
  });