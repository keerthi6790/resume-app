import React from "react";
import "./Skills.css";
export default function Skills() {
  return (
    <div className="Skills">
      <h1>Coding Skills</h1>
      <div className="SkillsFlex">
        <div className="skillSet">
          <div className="skillFlex">
            <div>HTML/CSS</div>
            <span>80%</span>
          </div>
          <div className="progress">
            <div className="innerProgress"></div>
          </div>
        </div>
        <div className="skillSet">
          <div className="skillFlex">
            <div>Javascript</div>
            <span>70%</span>
          </div>
          <div className="progress">
            <div className="innerProgress" style={{ width: "70%" }}></div>
          </div>
        </div>
        <div className="skillSet">
          <div className="skillFlex">
            <div>ReactJS</div>
            <span>70%</span>
          </div>
          <div className="progress">
            <div className="innerProgress" style={{ width: "70%" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
