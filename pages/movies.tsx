import type { NextPage } from "next";
import React from "react";

import { Layout, NavBar, HeaderBar, Footer } from "../components";

const Movies: NextPage = () => {
  return (
    <Layout title="DEMO Streaming">
      <NavBar />
      <HeaderBar headerTitle="Popular Movies" />
      <Footer />
    </Layout>
  );
};

export default Movies;
