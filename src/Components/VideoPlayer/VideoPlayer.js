import React, { useState } from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ src, startTime, endTime, showControls }) => {
  const [isPlaying, setIsPlaying] = useState(true);

  const handleReady = () => {
    // Seek to the specified start time when the video is ready
    setIsPlaying(true);
  };

  const handleEnded = () => {
    // Pause the video after it reaches the specified end time
    setIsPlaying(false);
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
    />
  );
};

export default VideoPlayer;