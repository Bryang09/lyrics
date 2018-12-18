import React from "react";

const Album = props => {
  const albums = props.albums;
  return (
    <div className="album">
      <div className="albumCover" />
      <div className="albumInfo">
        <h4>Album Name</h4>
        <h4>Album Release </h4>
      </div>
    </div>
  );
};

export default Album;
