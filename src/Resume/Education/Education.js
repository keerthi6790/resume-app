import React from "react";
import "./Education.css";
export default function Education() {
  return (
    <div className="Education">
      <h1>Education</h1>
      <div className="EducationFlex">
        <div className="Schooling">
          <div className="standard">10th</div>
          <div>
            <div className="standard">2016-2017</div>
            <div>
              I completed my 10th in Meenakshi Sundaranar Sengunthar Hr Sec
              School,Erode with <b>96.8%</b>
            </div>
          </div>
        </div>
        <div className="Schooling">
          <div className="standard">12th</div>
          <div>
            <div className="standard">2018-2019</div>
            <div>
              I completed my 12th in Meenakshi Sundaranar Sengunthar Hr Sec
              School,Erode with <b>85.66%</b>
            </div>
          </div>
        </div>
        <div className="Schooling">
          <div className="standard">BE CSE</div>
          <div>
            <div className="standard">2019-2023</div>
            <div>
              I pursuing my Bachelor of Engineering degree in stream of Computer
              Science and Enginering in K.S. Rangasamy College of Technology.My
              overall CGPA upto this semester is <b>9.04</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
