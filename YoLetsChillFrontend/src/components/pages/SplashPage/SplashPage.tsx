import React from "react";
import "../../../styles/globals.css";
import { useNavigate } from "react-router-dom";

const SplashPage = () => {
  const navigate = useNavigate();
  const [code, setCode] = React.useState("");
  const navigateToCreateEvent = () => {
    navigate("/create-event");
  }
  const navigateToEvent = () => {
    if (code.length === 6) {
        navigate(`/event/${code}`);
    } else {
        alert("Please enter a valid 6-digit code.");
    }
  }

  return (
    <div className="splash-container">
      <h1 className="splash-title">YoLetsChill</h1>
      <p className="splash-description">
        Plan fun events with friends when everyones actually free.
        <br />
        No group chats. Just vibes.
      </p>
      <button className="splash-button" onClick={navigateToCreateEvent}>Start Planning!</button>
      {/* Grayscale divider */}
      <div className="splash-divider">- or join a group -</div>

      {/* Input field and submit button side-by-side */}
      <div className="splash-code-entry">
        <input
          className="splash-input"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter the 6-digit code you received"
        />
        <button className="splash-button join-button" onClick={navigateToEvent}>Join</button>
      </div>

      <div className="splash-info">
        <p>✔️ See when your friends are free</p>
        <p>📆 Suggest times that work for everyone</p>
        <p>🎉 Lock in plans without the back and forth</p>
      </div>
    </div>
  );
};

export default SplashPage;
