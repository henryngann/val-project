import React, { useRef, useState } from "react";

import { Box } from "@mui/material";

const MusicPlayer = () => {
  const musicSrc = "../assets/bgmusic2.mp3";
  const [audioStatus, changeAudioStatus] = useState(false);
  const myRef = useRef<any>();

  const startAudio = () => {
    myRef.current.play();

    changeAudioStatus(true);
  };

  const pauseAudio = () => {
    myRef.current.pause();
    changeAudioStatus(false);
  };

  return (
    <Box>
      <audio ref={myRef} src={musicSrc} />
      {audioStatus ? (
        <button onClick={pauseAudio}>pause</button>
      ) : (
        <button onClick={startAudio}>start</button>
      )}
    </Box>
  );
};

export default MusicPlayer;
