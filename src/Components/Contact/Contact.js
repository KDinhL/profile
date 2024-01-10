import "./Contact.scss";
import React from "react";
import { Link } from "react-router-dom";
import "./Contact.scss";

export default function Contact() {
  return (
    <header className="header">
      <nav className="mobile-nav">
        <Link to="/">Profile</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/contacts">Contacts</Link>
      </nav>
    </header>
  );
}