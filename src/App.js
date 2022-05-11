import React from "react";
import ProfilePic from "./Components/ProfilePic";
import Intro from "./Components/Intro";
import ContactButtons from "./Components/ContactButtons";
import ProfileInfo from "./Components/ProfileInfo";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="app">
      <div className="card-wrapper">
        <ProfilePic />
        <Intro />
        <ContactButtons />
        <ProfileInfo />
        <Footer />
      </div>
    </div>
  );
}

export default App;
