import React, { useState } from "react";
import Track1 from "../mp3/track_1.mp3";
import Track2 from "../mp3/track_2.mp3";
import Track3 from "../mp3/track_3.mp3";

const MusicPlayerContext = React.createContext();


const defaultValues = {
    audioPlayer: new Audio(),
    tracks: [
      {
        name: "Cold Gin - Jazz",
        file: Track1,
      },
      {
        name: "heaven's On Fire - Jazz",
        file: Track2,
      },
      {
        name: "Beth - Jazz",
        file: Track3,
      },
    ],
    currentTrackIndex: null,
    isPlaying: false,
  }


const MusicPlayerProvider = ({children}) =>{
  const [state, setState] = useState(defaultValues);
  return (
    <MusicPlayerContext.Provider value={{state, setState}}>
      {children}
    </MusicPlayerContext.Provider>
  );
};

export { MusicPlayerContext, MusicPlayerProvider };