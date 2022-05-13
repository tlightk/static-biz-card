import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function Footer() {
  return (
    <div className="footer">
      <div className="icon-div"><FontAwesomeIcon icon={brands("twitter-square")} /></div>
      <div className="icon-div"><FontAwesomeIcon icon={brands("facebook-square")} /></div>
      <div className="icon-div"><FontAwesomeIcon icon={brands("instagram-square")} /></div>
      <div className="icon-div"><FontAwesomeIcon icon={brands("github-square")} /></div>
    </div>
  );
}
