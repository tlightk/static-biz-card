import React from "react";

export default function ContactButtons() {

    // reusable button component
    function ContactButton(props) {
        return (
            <button className={`btn ${props.addClass}`}>{props.text}</button>
        )
    }

    return (
        <div className="contact-buttons">
            <ContactButton text="Email" addClass="email" />
            <ContactButton text="LinkedIn" addClass="linkedin"/>
        </div>
    );
  }