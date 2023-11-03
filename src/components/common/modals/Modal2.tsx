import React, { useEffect, useState } from "react";
import "./Modal.css";

const Modal2 = ({ htmlContent, open }: any) => {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setModalOpen(open);
  }, [open]);

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="modal-container">
      {modalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button onClick={closeModal} className="close-button">
              X
            </button>
            {htmlContent}
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal2;
