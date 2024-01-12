import React, { useState } from "react";
import Modal from "../Modal/Modal";
import "./LinkVideo.scss";

const LinkVideo = ({ websiteLink, modalContent }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
  e.stopPropagation();
    const clickedText = e.target.textContent.trim();
    const isViewDetailsClicked = clickedText === "View Details";
  
    // Prevent the default action if "View Details" is clicked
    if (isViewDetailsClicked) {
      e.preventDefault();
      e.stopPropagation();
    }
  
    // Continue with opening the link or showing the modal based on your logic
    if (websiteLink && typeof websiteLink === 'string' && websiteLink.trim() !== "" && !isViewDetailsClicked) {
        window.open(websiteLink, "_blank");
      } else {
        setIsModalOpen(true);
      }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="link-video" onClick={handleClick}>
        {websiteLink ? (
          <span className="video-url">View Website</span>
        ) : (
          "View Details"
        )}
      </div>
      {isModalOpen && (
        <Modal content={modalContent} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default LinkVideo;