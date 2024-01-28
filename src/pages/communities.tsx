import CommunityCard from "@/components/CommunityCard";
import Layout from "@/components/Layout";
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
          <Link href="/solutions">
            <CommunityCard
              image="/theworldeconomicforum.png"
              title="The World Economic Forum"
              description="The World Economic Forum shapes global agendas by engaging leaders from various sectors to improve the world."
            />
          </Link>
          <Link href="/solutions">

            <CommunityCard
              image="/building.jpg"
              title="Residential community"
              description="Our community thrives through shared experiences."
            />
          </Link>

          <Link href="/solutions">

            <CommunityCard
              image="/hackatonimage.png"
              title="Hackathon"
              description="Hackathon is a community of developers, designers, and entrepreneurs who come together to solve problems using technology."
            />
          </Link>
          <Link href="/createCommunity">

            <CommunityCard
              image="/add-button.png"
              title="Create community"
              description="Create and organize a new community"
            />
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default communities;
