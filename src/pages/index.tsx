import Hero from "@/components/Hero";
import Layout from "@/components/layout";
import { type NextPage } from "next";
import Head from "next/head";


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Disruptive Management</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/disrup3.png" />
      </Head>

      <Layout>
        <Hero />
      </Layout>
    </>
  );
};

export default Home;