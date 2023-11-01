import React, { useState } from "react";
import "./Modal.css";

const Modal = ({ buttonName, htmlContent }: any) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="modal-container">
      <button className="button" onClick={openModal}>
        {buttonName}
      </button>
      {modalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button onClick={closeModal} className="close-button">
              Close
            </button>
            {htmlContent}
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
