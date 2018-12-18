import React, { Component } from "react";

import { Request } from "../../Request";

import axios from "axios";

class Album extends Component {
  state = {
    tracks: []
  };

  componentWillMount = () => {
    const album = this.props.match.params.id;
    axios
      .get(
        `${Request}album.tracks.get?album_id=${album}&page=1&page_size=2&apikey=${
          process.env.REACT_APP_KEY
        }`
      )
      .then(res => this.setState({ tracks: res.data.message.body.track_list }))
      .catch(err => console.log(err));
  };
  render() {
    console.log(this.props);
    return (
      <div className="Album">
        <h1>Album</h1>
      </div>
    );
  }
}

export default Album;
