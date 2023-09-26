import React from "react";
import HeroImg2 from "../components/Hero/HeroImg2";
import Navbar from "../components/Navbar/Navbar";
import Work from "../components/Work/Work";
import Footer from "../components/Footer/Footer";

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="PROJECTS." text="Some of my most recent works" />
      <Work />
      <Footer />
    </div>
  );
};

export default Project;
