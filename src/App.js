import React from "react";
import ProfilePic from "./Components/ProfilePic";
import Intro from "./Components/Intro";

function App() {
  return (
    <div className="app">
      <div className="card-wrapper">
        <ProfilePic />
        <Intro />
      </div>
    </div>
  );
}

export default App;
