import "./Modal.css";

const Modal2 = ({ htmlContent, modalOpen, setModalOpen }: any) => {
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
