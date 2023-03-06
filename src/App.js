import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import GamePage from "./components/GamePage";
import LeaderboardPage from "./components/LeaderboardPage";

import { db } from "./firebase";
import { collection, getDocs, query } from "firebase/firestore";

function App() {
  const [visible, setVisible] = useState(false);
  const [correctChoices, setCorrectChoices] = useState([]);

  async function findWaldo() {
    const charactersRef = collection(db, "character locations");
    const charactersQuery = query(charactersRef);

    getDocs(charactersQuery).then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        console.log(doc.data);
      });
    });
  }

  const getClickPosition = (e) => {
    setVisible(!visible);

    findWaldo();

    if (visible) {
      document.getElementById("characterSelectBox").style.visibility = "hidden";
    } else {
      document.getElementById("characterSelectBox").style.visibility =
        "visible";
    }

    let parentPosition = getPosition(e.currentTarget);
    let xPosition =
      e.clientX -
      parentPosition.x -
      document.getElementById("characterSelectBox").clientWidth / 2;
    let yPosition =
      e.clientY -
      parentPosition.y -
      document.getElementById("characterSelectBox").clientHeight / 2;

    document.getElementById("characterSelectBox").style.left = xPosition + "px";
    document.getElementById("characterSelectBox").style.top = yPosition + "px";

    let rect = document
      .getElementById("characterSelectBox")
      .getBoundingClientRect();
    console.log(rect.top, rect.left, rect.right, rect.bottom);
  };

  const getPosition = (el) => {
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

  const addCharacter = (character) => {
    const hasCharacterBeenChosen = correctChoices
      .map((character) => character.id)
      .includes(character.id);

    if (hasCharacterBeenChosen) {
      console.log(
        "addCharacter called successfully" +
          character.name +
          " has already been placed into the correctChoices array"
      );
    } else {
      setCorrectChoices([...correctChoices, character]);
      console.log(
        "addCharacter called successfully " +
          character.name +
          " has been placed into the correctChoices array"
      );
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/game"
            element={
              <GamePage
                getClickPosition={getClickPosition}
                addCharacter={addCharacter}
              />
            }
          />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
          <Route path="*" element={<p>There is nothing here!</p>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
