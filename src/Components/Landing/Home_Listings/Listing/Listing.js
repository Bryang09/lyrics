import React from "react";
import { Link } from "react-router-dom";

import "./Listsing.scss";

const Listing = props => {
  const top = props.state;
  console.log(top);

  const mapTop = top.map(res => {
    const result = res.track;
    const genre = result.primary_genres.music_genre_list[0];

    return (
      <div className="Listing" key={result.album_id}>
        <div
          className="listingCover"
          style={{ backgroundImage: `url(${result.album_coverart_100x100})` }}
        >
          <div className="listingColor" />
        </div>
        <div className="listingInfo">
          <h4>
            <Link
              to={{
                pathname: `/song/${result.track_id}/${result.commontrack_id}`
              }}
            >
              {result.track_name}
            </Link>
          </h4>
          <h5>
            <Link
              to={{
                pathname: `/artist/${result.artist_id}`
              }}
            >
              {result.artist_name}
            </Link>
          </h5>
          <h6>
            {genre ? genre.music_genre.music_genre_name : "We're Calculating"}
          </h6>
        </div>
      </div>
    );
  });
  return mapTop;
};

export default Listing;
