import React from "react";
import "../../../styles/globals.css";
const SplashPage = () => {
  return (
    <div className="splash-container">
      <h1 className="splash-title">YoLetsChill</h1>
      <p className="splash-description">
        Plan fun events with friends when everyone’s actually free.
        <br />
        No group chats. Just vibes.
      </p>
      <button className="splash-button">Start Planning!</button>
      {/* Grayscale divider */}
      <div className="splash-divider">- or join a group -</div>

      {/* Input field and submit button side-by-side */}
      <div className="splash-code-entry">
        <input
          className="splash-input"
          type="text"
          placeholder="Enter the 6-digit code you received"
        />
        <button className="splash-button join-button">Join</button>
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
