import React from "react";
import AboutContent from "../components/About/AboutContent";
import HeroImg2 from "../components/Hero/HeroImg2";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function About() {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="About." text="I'm a friendly Frontend developer" />
      <AboutContent />
      <Footer />
    </div>
  );
}

export default About;
