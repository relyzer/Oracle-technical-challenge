import type { NextPage } from "next";
import React from "react";

import { Layout, NavBar, HeaderBar, Footer } from "../components";

const Series: NextPage = () => {
  return (
    <Layout title="DEMO Streaming">
      <NavBar />
      <HeaderBar headerTitle="Popular Series" />
      <Footer />
    </Layout>
  );
};

export default Series;
