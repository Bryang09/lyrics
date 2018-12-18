import React, { Component } from "react";
import { Request } from "../../Request";
import axios from "axios";

import SongInfo from "./songInfo/songInfo";

import "./Song.scss";

class Song extends Component {
  state = {
    song: "",
    songInfo: null
  };

  componentWillMount = () => {
    const songId = this.props.match.params.id;
    const commonId = this.props.match.params.commonId;
    axios
      .get(
        `${Request}track.lyrics.get?track_id=${songId}&apikey=${
          process.env.REACT_APP_KEY
        }`
      )
      .then(res =>
        this.setState({ song: res.data.message.body.lyrics.lyrics_body })
      )
      .catch(err => console.log(err));

    axios
      .get(
        `${Request}track.get?commontrack_id=${commonId}&apikey=${
          process.env.REACT_APP_KEY
        }`
      )
      .then(res => this.setState({ songInfo: res.data.message.body.track }))
      .catch(err => console.log(err));
  };
  render() {
    console.log(this.state.song);
    console.log(this.state.songInfo);

    const song = this.state.song;
    const songInfo = this.state.songInfo;

    return (
      <div className="Song">
        <SongInfo songInfo={songInfo} />
        <hr />
        <section className="lyrics">
          <h2
            style={
              songInfo !== null ? { borderBottom: "1px solid #7260ff" } : null
            }
          >
            {songInfo !== null ? songInfo.track_name : null}
          </h2>
          <h4>{song}</h4>
        </section>
      </div>
    );
  }
}

export default Song;
