import React from "react";
import Album from "../Album";

import "./AlbumInfo.scss";

const AlbumInfo = props => {
  console.log(props);
  const album = props.album;
  const rating = album.album_rating;

  return (
    <section className="AlbumInfo">
      <div
        className="albumCover"
        style={{ backgroundImage: `url(${album.album_coverart_100x100})` }}
      />
      <div className="albumInformation">
        <h2>{album.album_name} </h2>
        <h3>{album.artist_name}</h3>
        <h4>{album.album_release_date}</h4>
        <h5>
          {album.album_track_count !== undefined
            ? `Tracks: ${album.album_track_count}`
            : ""}
        </h5>
        <h3 className="Rating">
          {album.album_rating !== undefined ? "Album Rating:" : null}
          <span
            style={
              rating >= 90
                ? { color: "#65ff65" }
                : rating >= 80
                ? { color: "#f8f835" }
                : rating < 80
                ? { color: "#ff5050" }
                : null
            }
          >
            {album.album_rating !== undefined ? `${album.album_rating}%` : ""}
          </span>
        </h3>
      </div>
    </section>
  );
};

export default AlbumInfo;
