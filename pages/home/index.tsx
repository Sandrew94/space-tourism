import HomePage from "@/components/HomePage";
import Layout from "@/components/Layout";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Layout titleMeta="Homepage">
      <HomePage />
    </Layout>
  );
};

export default Home;
