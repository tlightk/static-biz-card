import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands, solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function ContactButtons() {

    // reusable button component
    function ContactButton(props) {
        return (
            <div className="btn-wrapper">
                <FontAwesomeIcon icon={props.faIcon} className={`contact-icon ${props.addIconClass}`} />
                <button className={`btn ${props.addBtnClass}`}>{props.text}</button>
            </div>
            
        )
    }

    return (
        <div className="contact-buttons">
            <ContactButton text="Email" addBtnClass="email" faIcon={solid("envelope")} addIconClass="email-icon" />
            <ContactButton text="LinkedIn" addBtnClass="linkedin" faIcon={brands("linkedin")} addIconClass="linkedin-icon" />
        </div>
    );
  }