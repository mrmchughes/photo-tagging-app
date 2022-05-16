import React from "react";
import charactersArray from "./charactersArray";

const CharacterSelectBox = () => {
  return (
    <div id="characterSelectBox">
      <div id="targetBoxDiv">I am a placeholder for the targeting box!</div>
      {charactersArray.map((character) => {
        return <button key={character.id}>{character.name}</button>;
      })}
    </div>
  );
};

export default CharacterSelectBox;
