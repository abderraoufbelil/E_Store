import React, { useEffect } from "react";
import Containerlayout from "../../components/Containerlayout";
import Section_11 from "./Section_11";
import Section_12 from "./Section_12";
import Footer from "../../components/Footer";
import { Header } from "../../components/Header";

const Landing_page = () => {
  return (
    <>
      <Header />
      <Containerlayout {...{ color: "white", children: <Section_11 /> }} />
    </>
  );
};

export default Landing_page;
