import React from "react";
import StyledProgressbar from "./ProgressBar/ProgressBar";

import "./List.scss";

const List = props => {
  console.log(props.list);
  const lists = props.list;

  const list = lists.map(res => {
    const result = res.artist;

    return (
      <div className="list" key={result.artist_id}>
        <h3>
          {result.artist_name}
          <img
            src="https://img.icons8.com/ios/50/7260ff/musical-notes-filled.png"
            alt="Music Icon"
          />
        </h3>
        <h3 style={{ fontWeight: 300 }}>
          {result.primary_genres.music_genre_list[0]
            ? result.primary_genres.music_genre_list[0].music_genre
                .music_genre_name
            : "Genre Not Available"}
        </h3>
        <h3>
          <StyledProgressbar
            percentage={result.artist_rating}
            text={`${result.artist_rating}%`}
          />
          {/* <i>{result.artist_rating}</i> */}
        </h3>
      </div>
    );
  });

  return <div className="List">{list}</div>;
};

export default List;
