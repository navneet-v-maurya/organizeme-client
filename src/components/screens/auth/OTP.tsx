const OTP = ({ user, handleReister, hadleGenrateOtp, setUserData }: any) => {
  return (
    <div className="vertical-container">
      <h3>Hello {user.name}!</h3>
      <p>Please enter the OTP sent to the given email address {user.email}</p>
      <input
        value={user.otp}
        onChange={(e: any) => {
          setUserData({ ...user, otp: e.target.value });
        }}
        className="input"
        type="text"
        placeholder="Enter Otp"
      />
      <div className="horizontal-container">
        <button className="button" onClick={handleReister}>
          Enter Otp
        </button>
        <button className="button" onClick={hadleGenrateOtp}>
          Resend Otp
        </button>
      </div>
    </div>
  );
};

export default OTP;
