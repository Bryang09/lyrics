import React, { Component } from "react";
import { Request } from "../../Request";

class Song extends Component {
  state = {
    song: ""
  };
  render() {
    console.log(this.props);
    const songId = this.props.match.params.id;
    console.log(songId);
    return (
      <div className="Song">
        <h1>Song</h1>
      </div>
    );
  }
}

export default Song;
