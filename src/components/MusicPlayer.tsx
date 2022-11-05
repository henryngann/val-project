import React, { useState } from "react";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeMuteIcon from "@mui/icons-material/VolumeMute";
import { Button } from "@mui/material";

const MusicPlayer = () => {
  //path to bgmusic.mp3
  const [isPlaying, setIsPlaying] = useState(true);

  const musicSrc = "../assets/bgmusic.mp3";
  const audio = new Audio(musicSrc);

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  };

  return <Button>{isPlaying ? <VolumeUpIcon /> : <VolumeMuteIcon />} </Button>;
};

export default MusicPlayer;
