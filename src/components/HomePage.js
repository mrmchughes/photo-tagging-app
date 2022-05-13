import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const HomePage = () => {
  return (
    <div className="flex flex-col border-solid border-black border">
      <div className="flex-col text-center mt-3.5">
        <p>Welcome to my Where's Waldo game.</p>
        <p>
          Your goal is to find the following characters in the picture as fast
          as possible!
        </p>
        <p>
          When you've found a character, click on them and select their name.
        </p>
        <p>
          When you've found them all, you'll get to input your name on the
          leaderboard!
        </p>

        <NavBar />
      </div>
      <div className="flex place-content-center">
        <Link to="/game">Start!</Link>
      </div>
    </div>
  );
};

export default HomePage;
