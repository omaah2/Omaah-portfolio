import "./HeroImg.css";

import React from "react";
import profile from "../../resource/profile1.jpeg";
import profileLogo from "../../resource/profileBg.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  // const [hideText, setHideText] = useState(false);

  // const hideMessage= () => {
  //   if (window.scrollX >= 100) {
  //     setHideText(true);
  //   } else {
  //     setHideText(false);
  //   }
  // };
  return (
    <div className="hero">
      <div className="hero-mask">
        <img className="into-img" src={profileLogo} alt="brackground cover" />
      </div>
      <div className="hero-content">
        <div className="hero-content_top">
          <img src={profile} alt="" />
        </div>

        <div className="hero-content_bottom">
          <h1>
            Hi, I'm <span>Ummkhalad Oluwatosin
              Abdulrasheed</span>
          </h1>
          <h2>I'm a passionate Frontend Developer</h2>
          <p>
            I'm a developer with expertise in creating stunning and responsive
            user interfaces.
          </p>
          <>
            <div className="hero-content_btn large">
              <Link to="/project" className="btn">
                Projects
              </Link>
              <Link to="/contact" className="btn btn-light">
                Contact
              </Link>
            </div>
            <div className="hero-content_btn small">
              <Link to="/about" className="btn">
                About me
              </Link>
              <Link to="/contact" className="btn btn-light">
                Contact
              </Link>
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
