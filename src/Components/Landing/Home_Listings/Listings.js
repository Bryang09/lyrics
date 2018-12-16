import React, { Component } from "react";

import axios from "axios";

import "./Listings.scss";

import Listing from "./Listing/Listing";
import { Request } from "../../../Request";

class Listings extends Component {
  state = {
    top: []
  };
  componentWillMount = () => {
    axios
      .get(
        `${Request}chart.tracks.get?chart_name=top&page=1&page_size=4&country=us&f_has_lyrics=1&apikey=${
          process.env.REACT_APP_KEY
        }`
      )
      .then(res => this.setState({ top: res.data.message.body.track_list }))
      .catch(err => console.log(err));
  };
  render() {
    console.log(this.state.top);
    return (
      <div className="Listings">
        <Listing state={this.state.top} />
      </div>
    );
  }
}

export default Listings;
