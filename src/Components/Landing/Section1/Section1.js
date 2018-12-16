import React, { Component } from "react";
import axios from "axios";

import "./Section1.scss";
import Listings from "../Home_Listings/Listings";
import { Request } from "../../../Request";

class Section1 extends Component {
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
    return (
      <div className="Section">
        <div className="title">
          <h2>This Weeks Top Tracks</h2>
        </div>
        <Listings state={this.state.top} />
        <hr />
      </div>
    );
  }
}

export default Section1;
