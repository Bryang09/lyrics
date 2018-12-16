import React from "react";

import "./Section1.scss";
import Listings from "../Home_Listings/Listings";

const Section1 = () => {
  return (
    <div className="Section1">
      <div className="title">
        <h2>This Weeks Top Tracks</h2>
      </div>
      <Listings />
      <hr />
    </div>
  );
};

export default Section1;
