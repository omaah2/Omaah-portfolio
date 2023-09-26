import "./WorkCard.css";
import WorkCard from "./WorkCard";
import projectCardData from "./WorkCardData";

import React from "react";

const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {projectCardData.map((val, index) => {
          return (
            <WorkCard
              key={index}
              imgSrc={val.imgSrc}
              title={val.title}
              text={val.text}
              view={val.view}
              src={val.src}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Work;
