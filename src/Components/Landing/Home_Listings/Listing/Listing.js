import React from "react";

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
          <h4>{result.track_name}</h4>
          <h5>{result.artist_name}</h5>
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
