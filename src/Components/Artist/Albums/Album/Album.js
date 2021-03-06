import React from "react";
import ProgressBar from "../../../Landing/Section2/List/ProgressBar/ProgressBar";

import { Link } from "react-router-dom";

import "./Album.scss";

const Album = props => {
  const albums = props.albums;

  const Album = albums.map(res => {
    const album = res.album;
    return (
      <div className="album" key={album.album_id}>
        <div
          className="albumCover"
          style={{ backgroundImage: `url(${album.album_coverart_100x100})` }}
        />
        <div className="albumInfo">
          <h4 style={{ fontWeight: 400, fontSize: "1.5em" }}>
            <Link
              to={{
                pathname: `/album/${album.album_id}`
              }}
            >
              {album.album_name}
            </Link>
          </h4>
          {/* <h4 style={{ fontWeight: 400 }}>{album.album_release_date}</h4> */}
          <ProgressBar
            percentage={album.album_rating}
            text={`${album.album_rating}%`}
          />
        </div>
      </div>
    );
  });

  return <>{Album}</>;
};

export default Album;
