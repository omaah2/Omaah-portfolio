import "./FooterStyles.css";

import React from "react";
import {
  FaFacebook,
  FaHome,
  FaMailBulk,
  FaPhone,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Lagos, Nigeria.</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              <a href="tel:+2349161428126"> +2349161428126</a>
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              <a href="mailto:ummkhaladoluwatosin@mail.com">
                ummkhaladoluwatosin@gmail.com
              </a>
            </h4>
          </div>
        </div>
        <div className="right">
          <h4> My journey 🙃</h4>
          <p>
            My journey into the world of web development started with a
            curiosity for technology and a desire to create. Over the years,
            I've honed my skills and embraced the ever-evolving landscape of
            frontend development. It's not just a job; it's my passion, and I'm
            dedicated to staying at the forefront of this exciting field.
          </p>
          <br />
          <br />
          <p>
            <span style={{ color: "red", fontWeight: "700", fontSize: "30px" }}>
              A quick ask
            </span>
            <br />
            <span>How do you comfort a JavaScript bug?</span>
            <br />
            <br />
            <span>You console it.😂</span>
          </p>
          <div className="social">
            <FaFacebook
              size={20}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <a>
              <FaTwitter
                size={20}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
            <a href="https://www.linkedin.com/in/ummkhalad-oluwatosin-737b8a253?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bl3xdvfeoQl2NldArxbabsw%3D%3D">
              <FaLinkedin
                size={20}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
