import React from "react";

const AritstInfo = props => {
  const albums = props.albums;
  const artist = props.artist;

  const genres = artist.primary_genres
    ? artist.primary_genres.music_genre_list.map(res => {
        return (
          <h3 key={res.music_genre.music_genre_id}>
            {res.music_genre.music_genre_name}
          </h3>
        );
      })
    : null;

  return (
    <section className="artist">
      <div
        className="artistAlbumCover"
        style={
          albums.length > 0
            ? {
                backgroundImage: `url(${
                  albums[0].album.album_coverart_100x100
                })`
              }
            : null
        }
      />
      <div className="artistInfo">
        <h2>{albums.length !== 0 ? albums[0].album.artist_name : null}</h2>
        <div className="genres">{genres}</div>
      </div>
    </section>
  );
};

export default AritstInfo;
