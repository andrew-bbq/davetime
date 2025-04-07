// src/components/pages/EventLobby.tsx
import React from "react";
import { useParams } from "react-router-dom";

const EventLobby = () => {
  const { eventCode } = useParams();

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Event Lobby</h1>
      <p>Welcome to event <strong>{eventCode}</strong></p>
      <p>This is where people will gather to view and finalize plans.</p>
      {/* Later: check if user is host or attendee, load event details */}
    </div>
  );
};

export default EventLobby;
