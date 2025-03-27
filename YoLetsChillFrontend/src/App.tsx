import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import SplashPage from './components/pages/SplashPage/SplashPage';
import CreateEvent from "./components/pages/CreateEvent/CreateEvent";
import EventLobby from "./components/pages/EventLobby/EventLobby";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/create-event" element={<CreateEvent />} />
        <Route path="/event/:eventCode" element={<EventLobby />} />
      </Routes>
    </Router>
  );
}

export default App;
