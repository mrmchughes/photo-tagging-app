import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import GamePage from "./components/GamePage";
import LeaderboardPage from "./components/LeaderboardPage";
//import CharacterSelectBox from "./components/CharacterSelectBox";

function App() {
  const characterSelectBox = document.getElementById("characterSelectBox");

  const getClickPosition = (e) => {
    console.log("getClickPosition");

    let parentPosition = getPosition(e.currentTarget);
    let xPosition =
      e.clientX - parentPosition.x - characterSelectBox.clientWidth / 2;
    let yPosition =
      e.clientY - parentPosition.y - characterSelectBox.clientHeight / 2;

    characterSelectBox.style.left = xPosition + "px";
    characterSelectBox.style.top = yPosition + "px";
  };

  const getPosition = (el) => {
    console.log("getPosition");

    let xPos = 0;
    let yPos = 0;

    while (el) {
      if (el.tagName === "BODY") {
        let xScroll = el.scrollLeft || document.documentElement.scrollLeft;
        let yScroll = el.scrollTop || document.documentElement.scrollTop;

        xPos += el.offsetLeft - xScroll + el.clientLeft;
        yPos += el.offsetTop - yScroll + el.clientTop;
      } else {
        xPos += el.offsetLeft - el.scrollLeft + el.clientLeft;
        yPos += el.offsetTop - el.scrollTop + el.clientTop;
      }

      el = el.offsetParent;
    }
    return {
      x: xPos,
      y: yPos,
    };
  };

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
