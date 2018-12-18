import React from "react";

const songInfo = props => {
  console.log(props);
  const songInfo = props.songInfo;
  return (
    <section className="songInfo">
      <div
        className="img"
        style={
          songInfo !== null
            ? {
                backgroundImage: `url(${songInfo.album_coverart_100x100})`
              }
            : null
        }
      />
      <div
        className="songDetails"
        style={songInfo !== null ? { display: "flex" } : null}
      >
        <h3>
          <span>{songInfo !== null ? ` Artist: ` : null}</span>
          {songInfo !== null ? songInfo.artist_name : null}
        </h3>
        <h3>
          <span>{songInfo !== null ? `Title: ` : null}</span>
          {songInfo !== null ? songInfo.track_name : null}
        </h3>
        <h3>
          <span>{songInfo !== null ? `Album: ` : null}</span>
          {songInfo !== null ? songInfo.album_name : null}
        </h3>
        <h3>
          <span>
            {songInfo !== null &&
            songInfo.primary_genres !== undefined &&
            songInfo.primary_genres.music_genre_list[0]
              ? `Genre: `
              : null}
          </span>
          {songInfo !== null &&
          songInfo.primary_genres !== undefined &&
          songInfo.primary_genres.music_genre_list[0]
            ? songInfo.primary_genres.music_genre_list[0].music_genre
                .music_genre_name
            : null}
        </h3>
      </div>
    </section>
  );
};

export default songInfo;
