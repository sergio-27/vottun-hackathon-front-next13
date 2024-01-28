import CommunityCard from "@/components/CommunityCard";
import Layout from "@/components/layout";

import { api } from "@/utils/api";
import Link from "next/link";

const communities = () => {

  const {data: userCommunities} = api.community.getUserCommunities.useQuery({email: ""});
  console.log("userCommunities", userCommunities);

  return (
    <Layout>
      <div className="min-h-screen text-white bg-slate-950">
        <div className="container mx-auto p-4 z-50">
          <div className="flex justify-center">

            <h1 className="text-4xl font-extrabold text-gray-200  sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl mt-32 mb-4">COMMUNITIES</h1>
          </div>
          {userCommunities?.map((item:any, index:any) => (
            <Link href="/solutions">
            <CommunityCard
              image="https://imgs.search.brave.com/9cfyFwRcgmDX_c8G-9yCdsiUcsG_Vep9wwuDzHtl0s0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4z/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvYnVzaW5lc3Mt/bWFuYWdlbWVudC02/LzM0MS9BY2NvdW50/X2FjY291bnRzX2Fj/cXVpcmVyX2FmZmls/aWF0ZV9hZ3JlZW1l/bnRfYWxsaWVuY2Vf/YXVkaWVuY2VfYXZh/dGFyX2J1c2luZXNz/X2J1c2luZXNzbWFu/X2NsaWVudHMtMTI4/LnBuZw"
              title={item.communityName}
              description={item.communityDescription}
              contractAddress={item.contractAddress}
            />
          </Link>
      ))}
  
          <Link href="/createCommunity">
            <CommunityCard
              image="/add-button.png"
              title="Create community"
              description="Create and organize a new community"
              contractAddress=""
            />
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default communities;
