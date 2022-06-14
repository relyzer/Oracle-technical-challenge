import type { NextPage } from "next";
import React from "react";

import { Layout, NavBar, HeaderBar, Listing, Footer } from "../components";

const Home: NextPage = () => {
  return (
    <Layout title="DEMO Streaming">
      <NavBar />
      <HeaderBar headerTitle="Popular Titles"/>
      <Listing  />
      <Footer />
    </Layout>
  );
};

export default Home;
