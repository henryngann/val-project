import React, { useRef, useState } from "react";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeMuteIcon from "@mui/icons-material/VolumeMute";
import { Button } from "@mui/material";

const MusicPlayer = () => {
  const musicSrc = "../assets/bgmusic.mp3";
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
    <>
      <audio ref={myRef} src={musicSrc} />
      {audioStatus ? (
        <button onClick={pauseAudio}>pause</button>
      ) : (
        <button onClick={startAudio}>start</button>
      )}
    </>
  );
};

export default MusicPlayer;
