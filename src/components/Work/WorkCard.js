import "./WorkCard.css";
import React from "react";

const WorkCard = (props) => {
  return (
    <div className="wrapper">
      <div className="box">
      <img src={props.imgSrc} alt={props.title} />
      </div>
      <div className="desc">
        <h2 style={{ color: "#fff" }}>{props.title}</h2>
        <p>React</p>
        <div className="pro-btn">
          <a href={props.view} rel="noreferrer" target="_blank" className="btn">
            View
          </a>
          <a href={props.src} className="btn">
            Source
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
