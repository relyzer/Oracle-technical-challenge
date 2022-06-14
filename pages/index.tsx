import type { NextPage } from "next";
import React from "react";

import Layout from "../components/Layout";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <Layout title="Movie listing">
       <Footer/>
    </Layout>
  );
};

export default Home;
