import type { NextPage } from "next";
import React, { useState, useEffect } from "react";

// import sample from "../public/externaldata/sample.json"

import { useAppSelector, useAppDispatch } from "../redux-hooks/hooks";
import { addPrograms } from "../redux-reducers/programSlice";
import { addSeries } from "../redux-reducers/seriesSlice";

import { Programs } from "../definition/interface";
import { Layout, NavBar, HeaderBar, Footer } from "../components";
import { Listing } from "../components/content";
import filterProgramType from "../lib/utility/filterProgramType";
import ContentLoader from "../components/loader/ContentLoader";

const Series: NextPage = () => {
  const { programs } = useAppSelector((state) => state.program);
  const dispatch = useAppDispatch();

  const [isLoading, setIsLoading] = useState(true);
  const filteredArr = filterProgramType(programs.entries, "series");
  dispatch(addSeries(filteredArr));

  useEffect(() => {
    fetch("/api/program/programlist")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((result: Programs) => {
        dispatch(addPrograms(result));
      })
      .catch((error) => error)
      .finally(() => {
        setIsLoading(false);
      });
  }, [dispatch]);

  return (
    <Layout title="DEMO Streaming">
      <NavBar />
      <HeaderBar headerTitle="Popular Series" />
      {isLoading ? <ContentLoader /> : <Listing programsArr={filteredArr} />}
      <Footer />
    </Layout>
  );
};

export default Series;
