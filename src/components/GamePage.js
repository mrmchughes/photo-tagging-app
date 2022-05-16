import React from "react";
import NavBar from "./NavBar";
//import CharacterSelectBox from "./CharacterSelectBox";
import charactersArray from "./charactersArray";

const GamePage = (props) => {
  //const { getClickPosition } = props;

  const characterSelectBox = document.getElementById("characterSelectBox");

  const getClickPosition = (e) => {
    console.log("getClickPosition");

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
    <div>
      <NavBar />
      <div className="cityLevel" id="cityLevel" onClick={getClickPosition}>
        <div
          id="characterSelectBox"
          className="flex flex-col w-36 text-black text-center border-solid border border-black rounded-md mt-2.5 mx-1.5 p-1.5"
        >
          <div
            id="targetBoxDiv"
            className="bg-transparent border-solid border border-black rounded-md mt-2.5 mx-1.5 p-1.5 w-28 h-24"
          >
            I am a placeholder for the targeting box!
          </div>
          {charactersArray.map((character) => {
            return (
              <button
                key={character.id}
                className="bg-gray-200 text-black text-center border-solid border border-black rounded-md mt-2.5 mx-1.5 p-1.5 hover:shadow-lg hover:shadow-slate-500"
              >
                {character.name}
              </button>
            );
          })}
        </div>
      </div>
      ;
    </div>
  );
};

export default GamePage;
