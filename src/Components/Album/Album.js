import React, { Component } from "react";

import { Request } from "../../Request";

import axios from "axios";
import AlbumInfo from "./AlbumInfo/AlbumInfo";

class Album extends Component {
  state = {
    tracks: [],
    info: []
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
    axios
      .get(
        `${Request}album.get?album_id=${album}&apikey=${
          process.env.REACT_APP_KEY
        }`
      )
      .then(res => this.setState({ info: res.data.message.body.album }))
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div className="Album">
        <AlbumInfo album={this.state.info} />
      </div>
    );
  }
}

export default Album;
