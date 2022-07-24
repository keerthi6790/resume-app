import React from "react";
import "./Cards.css";
export default function Cards(props) {
  return (
    <div className="cards">
      <div className="id">{props.id}</div>
      <a href="">
        <div>{props.description}</div>
      </a>
    </div>
  );
}