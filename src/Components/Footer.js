import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function Footer() {
  return (
    <div className="footer">
      <FontAwesomeIcon icon={brands("twitter-square")} />
      <FontAwesomeIcon icon={brands("facebook-square")} />
      <FontAwesomeIcon icon={brands("instagram-square")} />
      <FontAwesomeIcon icon={brands("github-square")} />
    </div>
  );
}
