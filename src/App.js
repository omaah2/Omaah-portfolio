import React from "react";
// import About from "./routes/About";
import Home from "./page/Home";
import Contact from "./page/Contact";
import { Route, Routes } from "react-router-dom";
import Project from "./page/Project";
import About from "./page/About";
import NotFound from "./page/NotFound";


const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/project" element={<Project />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
