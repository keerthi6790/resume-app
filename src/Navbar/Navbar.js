import React, { useEffect } from "react";
import "./Navbar.css";
export default function Navbar() {
  
  return (
    <div className="flexDisplay">
      <div className="profileName">
        <span style={{ color: "#71EAA8" }}>Keerthi</span>vasan
      </div>
      <div className="profileMenu">
        <span>Home</span>
        <span>Profile</span>
        <span>Education</span>
        <span>Contact</span>
      </div>
    </div>
  );
}
