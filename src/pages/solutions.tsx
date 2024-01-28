import React from "react";
import SolutionCard from "@/components/SolutionCard";
import Layout from "@/components/Layout";
import Link from "next/link";

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
                <Link href="/chat">
                  <SolutionCard title="Chat" />
                </Link>
                <SolutionCard
                  title="Voting"
                 
                />
                <SolutionCard
                  title="Proposals"
                 
                />
                <SolutionCard
                  title="Shared payments"
                />
              </div>
              <Link href="/communities" passHref>
                <button className="focus:shadow-outline -my-2 mx-10 rounded bg-gray-500 px-4 py-2 font-bold text-white hover:bg-gray-600 focus:outline-none">
                  Back
                </button>
              </Link>
            </div>
          </div>
        </section>
      </section>
    </Layout>
  );
};

export default solutions;
