import React from "react";
import SolutionCard from "@/components/SolutionCard";
import Layout from "@/components/layout";
import Link from "next/link";
import Image from "next/image";

const solutions = () => {
  return (
    <Layout>
      <section className="min-h-screen bg-slate-950 p-4">
        <section className="mt-20 flex justify-center">
          <h1 className="text-4xl font-extrabold text-gray-200  sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl">
            CHAT
          </h1>
        </section>
        <section className="flex h-full flex-grow flex-col items-center justify-center">
          <div className="h-full max-h-screen min-h-full w-3/4 overflow-y-auto">
            <div className="my-4 h-96 rounded-xl border-2 border-white bg-slate-300 py-2">
              <div className="m-2 w-fit rounded-full bg-black px-8 py-2 text-2xl text-white">
                Welcome to the community chat!
              </div>
              <div className="flex justify-end">
                <div className="m-2 flex w-fit items-end rounded-full bg-slate-600 px-8 py-2 text-right text-2xl text-white">
                  Hi everyone!
                </div>
              </div>
            </div>
            <form className="mt-2 ">
              <div className=" flex items-center justify-between">
                <button
                  type="submit"
                  className="mr-2 flex items-center justify-center rounded-full bg-blue-500 p-2 text-white"
                >
                  <Image
                    src="/add-button.png"
                    alt=" Send"
                    width={30}
                    height={30}
                  />
                </button>
                <input
                  type="text"
                  value="Write here"
                  className="w-full rounded-xl border p-2 text-slate-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="ml-2 flex items-center justify-center rounded-full bg-blue-500 p-4 text-white"
                >
                  <Image
                    src="/enviar.png"
                    alt=" Send"
                    width={20}
                    height={20}
                    className="invert filter"
                  />
                </button>
              </div>
            </form>
          </div>
        </section>
      </section>
    </Layout>
  );
};

export default solutions;
