import React, { useState } from "react";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import "./ProjectsDisplay.scss";
import BrainFlixvid from "../../assets/Video/BrainFlix/brain-flix.mp4"
import Instockvid from "../../assets/Video/Instock/instock.mp4"
import TravelSitevid from "../../assets/Video/TravelSite/travel-site.mp4"
import Repoaker from "../../assets/Video/Repoaker/Repoaker.mp4"
import LinkVideo from "../LinkVideo/LinkVideo";

const ProjectsDisplayData = [
  {
    title: "BrainFlix",
    videoSrc: BrainFlixvid,
    websiteLink: "https://wonderful-tarsier-9ba85e.netlify.app/",

  },
  {
    title: "Instock",
    videoSrc: Instockvid,
    modalContent: (
      <>
        <p>Sorry!, this website is currently not deployed. However, you can review the source code on GitHub using the following links:</p>
        <p>For client side URL: <a href="https://github.com/KDinhL/Dinh-Ly-instock-client.git" target="_blank" rel="noopener noreferrer">https://github.com/KDinhL/Dinh-Ly-instock-client.git</a></p>
        <p>For API URL: <a href="https://github.com/KDinhL/Dinh-Ly-instock-api.git" target="_blank" rel="noopener noreferrer">https://github.com/KDinhL/Dinh-Ly-instock-api.git</a></p>
      </>
    ),
  },
  {
    title: "Travel Site",
    videoSrc: TravelSitevid,
    websiteLink: "https://cheerful-bavarois-7c065e.netlify.app/",

  },
  {
    title: "Repoaker",
    videoSrc: Repoaker,
    websiteLink: "https://main--legendary-sorbet-8f3fca.netlify.app/",
  },
];

const ProjectsDisplay = () => {
  const [currentVideo, setCurrentVideo] = useState(null);

  const handleVideoClick = (websiteLink, modalContent) => {
    if (websiteLink) {
      window.open(websiteLink, "_blank");
    } else if (modalContent) {
      
      setCurrentVideo(modalContent);
    }
  };

  return (
    <div className="ProjectsDisplay">
      {ProjectsDisplayData.map((project, index) => (
        <div key={index} className="project-item" onClick={() => handleVideoClick(project.websiteLink)}>
          <h2 className="project-title">{project.title}</h2>
          <VideoPlayer
            src={project.videoSrc}
            autoPlay={false}
            loop={false}
            startTime={0}
            endTime={4}
            showControls={false}
          />
                    <LinkVideo
            websiteLink={project.websiteLink}
            modalContent={project.modalContent}
            onClick={() => handleVideoClick(project.websiteLink, project.modalContent)}
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