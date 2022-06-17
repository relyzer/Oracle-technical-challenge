import type { NextPage } from "next";
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import React from "react";

// import sample from "../public/externaldata/sample.json"

import { Programs } from "../definition/interface";
import { Layout, NavBar, HeaderBar, Footer } from "../components";
import { Listing } from "../components/content";
import filterProgramType from "../lib/utility/filterProgramType"

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`http://localhost:3000/api/program/programlist`)
  const programs: Programs = await res.json()

  // const programs: Programs = sample;
  return {
    props: {
      programs,
    },
  }
}

const Movies: NextPage = ({ programs }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const filteredArr = filterProgramType(programs.entries, "movie");
  return (
    <Layout title="DEMO Streaming">
      <NavBar />
      <HeaderBar headerTitle="Popular Movies" />
      <Listing programsArr={filteredArr} />
      <Footer />
    </Layout>
  );
};

export default Movies;
