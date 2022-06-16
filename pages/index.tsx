import type { NextPage } from "next";
import React from "react";

import { Layout, NavBar, HeaderBar, Footer } from "../components";
import { Listing } from "../components/content";
import { Programs } from "../definition/interface";

const Home: NextPage = () => {
  const data: Programs = {
    total: 100,
    entries: [
      {
        title: "Wolf Creek",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        programType: "series",
        images: {
          "Poster Art": {
            url: "https://streamcoimg-a.akamaihd.net/000/128/61/12861-PosterArt-ec32a81986a45eac7e080112075ab466.jpg",
            width: 1000,
            height: 1500,
          },
        },
        releaseYear: 2016,
      },
      {
        title: "No Activity",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        programType: "series",
        images: {
          "Poster Art": {
            url: "https://streamcoimg-a.akamaihd.net/000/106/36/10636-PosterArt-9add943c5e62c2d89f6d31458d33508a.jpg",
            width: 1000,
            height: 1500,
          },
        },
        releaseYear: 2015,
      },
      {
        "title": "Billions",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "programType": "series",
        "images": {
          "Poster Art": {
            "url": "https://streamcoimg-a.akamaihd.net/000/117/25/11725-PosterArt-deecf8dbd786dfa2d964413b0bf83726.jpg",
            "width": 720,
            "height": 1080
          }
        },
        "releaseYear": 2016
      },
      {
        "title": "Better Call Saul",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "programType": "series",
        "images": {
          "Poster Art": {
            "url": "https://streamcoimg-a.akamaihd.net/000/175/7/1757-PosterArt-fc0e2a5b18d4a662717f3cbb1827871d.jpg",
            "width": 1000,
            "height": 1500
          }
        },
        "releaseYear": 2015
      },
      {
        "title": "Younger",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "programType": "series",
        "images": {
          "Poster Art": {
            "url": "https://streamcoimg-a.akamaihd.net/000/143/24/14324-PosterArt-a0168953a3b93681dbd60c7bcc50a0af.jpg",
            "width": 1000,
            "height": 1500
          }
        },
        "releaseYear": 2015
      },
      {
        "title": "Ash vs Evil Dead",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "programType": "series",
        "images": {
          "Poster Art": {
            "url": "https://streamcoimg-a.akamaihd.net/000/102/56/10256-PosterArt-1a57bf03033531becb18f2ad0c755f5a.jpg",
            "width": 1000,
            "height": 1500
          }
        },
        "releaseYear": 2015
      },
      {
        "title": "Transparent",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "programType": "series",
        "images": {
          "Poster Art": {
            "url": "https://streamcoimg-a.akamaihd.net/000/108/7/1087-PosterArt-d19ff1330226ba26e4eb1def7a465f99.jpg",
            "width": 1000,
            "height": 1500
          }
        },
        "releaseYear": 2014
      },
      {
        "title": "Power",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "programType": "series",
        "images": {
          "Poster Art": {
            "url": "https://streamcoimg-a.akamaihd.net/000/512/1/5121-PosterArt-8957df8b3f89afc2809d068a9bf7f667.jpg",
            "width": 1000,
            "height": 1500
          }
        },
        "releaseYear": 2014
      },
      {
        "title": "UnREAL",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "programType": "series",
        "images": {
          "Poster Art": {
            "url": "https://streamcoimg-a.akamaihd.net/000/939/3/9393-PosterArt-6e5b82950cfce05fef0a50ff7a69474a.jpg",
            "width": 1000,
            "height": 1500
          }
        },
        "releaseYear": 2015
      },
    ],
  };


  // const randomArr = [
  //   "1",
  //   "2",
  //   "3",
  //   "1",
  //   "2",
  //   "3",
  //   "1",
  //   "2",
  //   "3",
  //   "1",
  //   "2",
  //   "3",
  //   "1",
  //   "2",
  //   "3",
  // ];
  return (
    <Layout title="DEMO Streaming">
      <NavBar />
      <HeaderBar headerTitle="Popular Titles" />
      <Listing programsArr={data.entries} />
      <Footer />
    </Layout>
  );
};

export default Home;
