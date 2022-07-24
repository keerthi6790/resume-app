import React from "react";
import Cards from "./Cards/Cards";
import "./Projects.css";
export default function Projects() {
  return (
    <div className="Projects">
      <h1>Projects</h1>
      <div className="projectsFlex">
        <Cards id="1" description="Amazon Clone using ReactJS" />
        <Cards id="2" description="Ecommerce website using HTML/CSS" />
        <Cards id="3" description="Weather API using jquery" />
      </div>
    </div>
  );
}
