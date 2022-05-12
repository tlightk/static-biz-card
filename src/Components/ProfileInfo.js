import React from "react";

export default function ProfileInfo() {
  const aboutDescription =
    "Kittles Spotfur, featured on the front page of 2020's Me-Wow Magazine, is a professional model. A famous underwear model, he has modeled for big brands such as Feline Coats and BrrFurr.";
  const interestsDescription =
    "Of course, Kittles loves modeling. His favorite food is canned sardines. On his free time, he enjoys looking out the window and laying on top of flat surfaces.";

  // create component for about, interests, etc.
  function Content(props) {
    return (
      <div className="content">
        <h2>{props.text}</h2>
        <p>{props.description}</p>
      </div>
    );
  }

  return (
    <div className="profile-info">
      <Content text="About" description={aboutDescription} />
      <Content text="Interests" description={interestsDescription} />
    </div>
  );
}
