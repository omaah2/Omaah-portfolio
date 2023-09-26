import "./AboutContent.css";
import profile from "../../resource/profile2.jpg";
import bg from "../../resource/Logo.png";

import React from "react";
import { Link } from "react-router-dom";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who am I?</h1>
        <p>
         I'm a passionate frontend developer with a
          creative edge and a knack for crafting engaging user experiences. With
          a strong foundation in web technologies, a love for clean and
          responsive design, and an eye for detail, I bring digital ideas to
          life.
        </p>
        <Link to={"/contact"}>
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={profile} alt="My bg" className="img" />
          </div>
          <div className="img-stack bottom">
            <img src={bg} alt="My bg" className="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
