import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <nav className="mobile-nav">
        <Link to="/">Profile</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/contacts">Contacts</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/achievement">Achievement</Link>


      </nav>
    </header>
  );
}