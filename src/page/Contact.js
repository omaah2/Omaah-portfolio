import React from "react";
import Form from "../components/Form/Form";
import HeroImg2 from "../components/Hero/HeroImg2";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function Contact() {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Contact." text="Let's have a chat" />
      <Form />
      <Footer/>
    </div>
  );
}

export default Contact;
