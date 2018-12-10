import React from "react";

import "./Landing.scss";

import Hero from "./Hero/Hero";
import Section1 from "./Section1/Section1";

const Landing = () => {
  return (
    <div className="Landing">
      <Hero />
      <Section1 />
    </div>
  );
};

export default Landing;
