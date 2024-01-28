import React from "react";
import SolutionCard from "@/components/SolutionCard"; // Asegúrate de que la ruta de importación sea correcta
import Layout from "@/components/layout";

const Solutions = () => {
  return (
    <Layout>
      <section className="min-h-screen bg-black p-4">
        <section className="mt-20 flex justify-center">
          <h1 className="text-4xl font-extrabold text-[#5985a8]  sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl">
            SOLUTIONS
          </h1>
        </section>
        <section>
          <div className="">
            <div className="container mx-auto">
              <div className="mt-10">
                <SolutionCard
                  backgroundImage="solution-2.png"
                  title="Chat"
                 
                />
                <SolutionCard
                  backgroundImage="solution-4.png"
                  title="Votaciones"
                 
                />
                <SolutionCard
                  backgroundImage="solution-6.png"
                  title="Propuestas"
                 
                />
                <SolutionCard
                  backgroundImage="solution-7.png"
                  title="Pagos para putas"
                
                />
              </div>
            </div>
          </div>
        </section>
      </section>
    </Layout>
  );
};

export default Solutions;
