import React from "react";
import "../../../App.scss";
import { useNavigate } from "react-router-dom";

const SplashPage = () => {
  const navigate = useNavigate();
  const [code, setCode] = React.useState("");
  const navigateToCreateEvent = () => {
    navigate("/create-event");
  };
  const navigateToEvent = () => {
    if (code.length === 6) {
      navigate(`/event/${code}`);
    } else {
      alert("Please enter a valid 6-digit code.");
    }
  };

  return (
    <div className="container">
      <h1 className="header">YoLetsChill</h1>

      <p className="text">
        Plan fun events with friends when everyone’s actually free.
        <br />
        No group chats. Just vibes.
      </p>

      <button className="button" onClick={navigateToCreateEvent}>
        Start Planning!
      </button>

      <div className="divider">- or join a group -</div>

      <div className="code-entry">
        <input
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter the 6-digit code you received"
        />
        <button className="button" onClick={navigateToEvent}>
          Join
        </button>
      </div>

      <div className="text">
        <p>✔️ See when your friends are free</p>
        <p>📆 Suggest times that work for everyone</p>
        <p>🎉 Lock in plans without the back and forth</p>
      </div>
    </div>
  );
};

export default SplashPage;
