import CommunityCard from "@/components/CommunityCard";
import Layout from "@/components/Layout";
import Link from "next/link";

const communities = () => {
  return (
    <Layout>
      <div className="min-h-screen text-white bg-slate-950">
        <div className="container mx-auto p-4 z-50">
          <div className="flex justify-center">

            <h1 className="text-4xl font-extrabold text-gray-200  sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl mt-32">COMMUNITIES</h1>
          </div>
          <Link href="/solutions">
            <CommunityCard
              image="/img-community-1.jpg"
              title="Españita"
              description="Bienvenido a Españita, donde los chistes fluyen como el vino y las siestas son ley. Un lugar mágico donde las paellas te envían memes y Don Quijote es influencer."
            />
          </Link>
          <Link href="/solutions">

            <CommunityCard
              image="/img-community-2.png"
              title="Emiratos Barcelona"
              description="Barcelona, el rincón donde las palmeras bailan flamenco y la Sagrada Familia es una lámpara mágica. Aquí, los camellos navegan por la Rambla y cada meme es un viaje en alfombra voladora."
            />
          </Link>

          <Link href="/solutions">

            <CommunityCard
              image="/imagen-fea.png"
              title="Valencia Digital Summit"
              description="Llega el Valencia Digital Summit (VDS2023) un evento que busca fortalecer la relación entre startups..."
            />
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default communities;
