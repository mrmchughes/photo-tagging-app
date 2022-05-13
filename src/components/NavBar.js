import React from "react";

const NavBar = () => {
  return (
    <div className="flex flex-row place-content-center">
      <div>
        <p>Odlaw</p>
        <img src={require("../imgs/Odlaw.png")} alt="Odlaw" />
      </div>
      <div>
        <p>Waldo</p>
        <img src={require("../imgs/Waldo.png")} alt="Waldo" />
      </div>
      <div>
        <p>Wenda</p>
        <img src={require("../imgs/Wenda.png")} alt="Wenda" />
      </div>
      <div>
        <p>Wizard Whitebeard</p>
        <img
          src={require("../imgs/Wizard_Whitebeard.png")}
          alt="Wizard Whitebeard"
        />
      </div>
      <div>
        <p>Woof</p>
        <img src={require("../imgs/Woof.png")} alt="Woof" />
      </div>
    </div>
  );
};

export default NavBar;
