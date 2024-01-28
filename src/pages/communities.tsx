import CommunityCard from "@/components/CommunityCard";
import Layout from "@/components/layout";

const communities = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-black text-white">
        <div className="container mx-auto p-4">
          <h1 className="mb-8 text-3xl font-bold">Communities</h1>
          <CommunityCard
            image="/img-community-1.jpg" // Reemplaza con la ruta de tu imagen
            title="Españita"
            description="Bienvenido a Españita, donde los chistes fluyen como el vino y las siestas son ley. Un lugar mágico donde las paellas te envían memes y Don Quijote es influencer."
          />
          <CommunityCard
            image="/img-community-2.png" // Reemplaza con la ruta de tu imagen
            title="Emiratos Barcelona"
            description="Barcelona, el rincón donde las palmeras bailan flamenco y la Sagrada Familia es una lámpara mágica. Aquí, los camellos navegan por la Rambla y cada meme es un viaje en alfombra voladora."
          />
          <CommunityCard
            image="/imagen-fea.png" // Reemplaza con la ruta de tu imagen
            title="Valencia Digital Summit"
            description="Llega el Valencia Digital Summit (VDS2023) un evento que busca fortalecer la relación entre startups..."
          />
        </div>
      </div>
    </Layout>
  );
};

export default communities;
