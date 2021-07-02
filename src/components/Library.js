// this component renders all the songs present in the util.js

import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({ audioRef, songs, setCurrentSong }) => {
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            audioRef={audioRef}
            songs={songs}
            setCurrentSong={setCurrentSong}
            song={song}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
