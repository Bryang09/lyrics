import React, { Component } from "react";

import "./Listings.scss";

import Listing from "./Listing/Listing";

class Listings extends Component {
  render() {
    const search = this.props.state;
    console.log(search);
    return (
      <div className="Listings">
        <Listing state={search} />
      </div>
    );
  }
}

export default Listings;
