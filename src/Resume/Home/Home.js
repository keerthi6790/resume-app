import React from "react";
import Typewriter from "typewriter-effect";
import "./Home.css";
export default function Home({props}) {
  console.log(props)
  return (
      <div className="HomeDisplay">
        <div className="personalDetails">
          <div>
            Hello, I'm <span>Keerthivasan</span>,<br />
            FrontEnd Developer
            <br />
            based in TamilNadu..
          </div>
          <div className="type">
            I'm
            <Typewriter
              options={{
                strings: [" ReactJS Developer", " FrontEnd Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <span class="scroll-btn">
          <a href="#">
            <span class="mouse">
              <span></span>
            </span>
          </a>
        </span>

        </div>
      </div>
  );
}
