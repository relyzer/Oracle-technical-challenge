import type { NextPage } from "next";
import React from "react";

import { Layout, NavBar, HeaderBar, Footer } from "../components";
import { NavCategory } from "../components/content";

const Home: NextPage = () => {
  const categories: string[] = ["Series", "Movies"]
  return (
    <Layout title="DEMO Streaming">
      <NavBar />
      <HeaderBar headerTitle="Popular Titles" />
      <NavCategory categories={categories}/>
      <Footer />
    </Layout>
  );
};

export default Home;
