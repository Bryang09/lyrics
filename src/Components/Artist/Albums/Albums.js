import React from "react";

import Album from "./Album/Album";

const Albums = props => {
  const albums = props.albums;
  return (
    <section className="Albums">
      <Album albums={albums} />
    </section>
  );
};

export default Albums;
