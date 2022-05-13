import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import GamePage from "./components/GamePage";
import LeaderboardPage from "./components/LeaderboardPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
          <Route path="*" element={<p>There is nothing here!</p>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
