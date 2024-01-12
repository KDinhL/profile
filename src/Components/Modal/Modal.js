import React from "react";
import "./Modal.scss";

const Modal = ({ content, onClose }) => {
    const handleClickOutside = (e) => {
      e.stopPropagation();    
        // Close the modal only if the click is outside the video and outside the modal content
          onClose();
      };

  return (
    <div className="modal-overlay" onClick={handleClickOutside}>
      <div className="modal-content">
        {content}
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
