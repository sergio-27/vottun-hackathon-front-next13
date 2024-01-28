import React from "react";
import SolutionCard from "@/components/SolutionCard"; 
import Layout from "@/components/Layout";

const solutions = () => {
  return (
    <Layout>
      <section className="min-h-screen bg-slate-950 p-4">
        <section className="mt-20 flex justify-center">
          <h1 className="text-4xl font-extrabold text-gray-200  sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl">
            SOLUTIONS
          </h1>
        </section>
        <section>
          <div className="">
            <div className="container mx-auto mt-16">
              <div className="mt-10">
                <SolutionCard
                  backgroundImage="solution-4.png"
                  title="Chat"
                 
                />
                <SolutionCard
                  backgroundImage="solution-4.png"
                  title="Votaciones"
                 
                />
                <SolutionCard
                  backgroundImage="solution-4.png"
                  title="Propuestas"
                 
                />
                <SolutionCard
                  backgroundImage="solution-4.png"
                  title="Pagos compartidos"
                
                />
              </div>
            </div>
          </div>
        </section>
      </section>
    </Layout>
  );
};

export default solutions;
