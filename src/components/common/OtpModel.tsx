import React, { useState } from "react";
import "./css/OtpModel.css";

const OtpModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const [otp, setOtp] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 6) {
      setOtp(value);
    }
  };

  return (
    <div className={`otp-modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <div className="modal-header">
          <h4>Enter OTP</h4>
          <button className="close-button" onClick={onClose}>
            X
          </button>
        </div>

        <input
          className="input"
          type="text"
          value={otp}
          onChange={handleInputChange}
          maxLength={6}
          placeholder="Enter OTP"
        />

        <button className="button" onClick={onClose}>
          Verify OTP
        </button>
      </div>
    </div>
  );
};

export default OtpModal;
