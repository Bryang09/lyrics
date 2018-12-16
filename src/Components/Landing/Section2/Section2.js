import React, { Component } from "react";
import axios from "axios";

// import "./Section2.scss";
import List from "./List/List";
import { Request } from "../../../Request";

class Section2 extends Component {
  state = {
    top: []
  };

  componentWillMount = () => {
    axios
      .get(
        `${Request}chart.artists.get?page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${
          process.env.REACT_APP_KEY
        }`
      )
      .then(res => this.setState({ top: res.data.message.body.artist_list }))
      .catch(err => console.log(err));
  };
  render() {
    console.log(this.state.top);
    return (
      <div className="Section">
        <div className="title">
          <h2>Search By Top Artists</h2>
        </div>
        <List list={this.state.top} />
        {/* <Listings state={this.state.top} /> */}
        <hr />
      </div>
    );
  }
}

export default Section2;
