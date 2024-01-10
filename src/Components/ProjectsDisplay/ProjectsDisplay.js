import React, { useState } from "react";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import "./ProjectsDisplay.scss";
import BrainFlixvid from "../../assets/Video/BrainFlix/brain-flix.mp4"
import Instockvid from "../../assets/Video/Instock/instock.mp4"
import TravelSitevid from "../../assets/Video/TravelSite/travel-site.mp4"

const ProjectsDisplayData = [
  {
    title: "BrainFlix",
    videoSrc: BrainFlixvid,
  },
  {
    title: "Instock",
    videoSrc: Instockvid,
  },
  {
    title: "Travel Site",
    videoSrc: TravelSitevid,
  },
];

const ProjectsDisplay = () => {
  const [currentVideo, setCurrentVideo] = useState(null);

  const handleVideoClick = (videoSrc) => {
    setCurrentVideo(videoSrc);
  };

  return (
    <div className="ProjectsDisplay">
      {ProjectsDisplayData.map((project, index) => (
        <div key={index} className="project-item" onClick={() => handleVideoClick(project.videoSrc)}>
          <h2 className="project-title">{project.title}</h2>
          <VideoPlayer
            src={project.videoSrc}
            autoPlay={false}
            loop={false}
            startTime={0}
            endTime={4}
            showControls={false}
          />
        </div>
      ))}
      {currentVideo && (
        <div className="video-overlay" onClick={() => setCurrentVideo(null)}>
          <VideoPlayer src={currentVideo} autoPlay={true} loop={false} startTime={0} endTime={4} showControls={false} />
        </div>
      )}
    </div>
  );
};

export default ProjectsDisplay;