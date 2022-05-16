import React from "react";
import charactersArray from "./charactersArray";

const CharacterSelectBox = (props) => {
  return (
    <div
      id="characterSelectBox"
      className="flex flex-col w-36 text-black text-center mt-2.5 mx-1.5 p-1.5"
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
  );
};

export default CharacterSelectBox;
