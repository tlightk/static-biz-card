import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands, regular } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function ContactButtons() {

    // reusable button component
    function ContactButton(props) {
        return (
            <div className="btn-wrapper">
                <FontAwesomeIcon icon={brands("twitter-square")} className={`contact-icon ${props.addIconClass}`} />
                <button className={`btn ${props.addBtnClass}`}>{props.text}</button>
            </div>
            
        )
    }

    return (
        <div className="contact-buttons">
            <ContactButton text="Email" addBtnClass="email" addIconClass="email-icon" />
            <ContactButton text="LinkedIn" addBtnClass="linkedin" addIconClass="linkedin-icon" />
        </div>
    );
  }