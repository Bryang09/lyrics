import React, { Component } from "react";
import { Request } from "../../Request";
import axios from "axios";

import Nav from "../Nav/Nav";
import ArtistInfo from "./artistInfo/ArtistInfo";
import Albums from "./Albums/Albums";

import "./Artist.scss";

class Artist extends Component {
  state = {
    albums: [],
    artist: []
  };
  componentWillMount = () => {
    const artist = this.props.match.params.id;
    axios
      .get(
        `${Request}artist.albums.get?artist_id=${artist}&s_release_date=desc&g_album_name=1&apikey=${
          process.env.REACT_APP_KEY
        }`
      )
      .then(res => this.setState({ albums: res.data.message.body.album_list }))
      .catch(err => console.log(err));

    axios
      .get(
        `${Request}artist.get?artist_id=${artist}&apikey=${
          process.env.REACT_APP_KEY
        }`
      )
      .then(res => this.setState({ artist: res.data.message.body.artist }))
      .catch(err => console.log(err));
  };
  render() {
    console.log(this.state.albums);
    console.log(this.state.artist);
    const albums = this.state.albums;
    const artist = this.state.artist;

    return (
      <div className="Artist">
        <Nav />
        <ArtistInfo albums={albums} artist={artist} />
        <Albums albums={albums} />
      </div>
    );
  }
}

export default Artist;
