import React, { useState } from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ src, startTime, endTime, showControls }) => {
  const [isPlaying, setIsPlaying] = useState(true);

  const handleReady = () => {
    setIsPlaying(true);
  };

  const handleEnded = () => {
    setIsPlaying(false);
  };

  const handleClick = (e) => {
    e.stopPropagation();
    e.preventDefault(); // Prevent the default action

  };

  return (
    <ReactPlayer
      url={src}
      playing={isPlaying}
      loop={false}
      controls={showControls}
      width="100%"
      height="auto"
      onStart={() => setIsPlaying(true)}
      onReady={handleReady}
      onEnded={handleEnded}
      config={{ file: { attributes: { autoPlay: true, muted: true } } }}
      onClick={handleClick}
    />
  );
};

export default VideoPlayer;