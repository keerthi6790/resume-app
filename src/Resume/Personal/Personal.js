import React from "react";
import "./Personal.css";
export default function Personal() {
  return (
    <div className="personalFlex">
      <img
        src="data:image/jpeg;base64,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"
        alt="Photo"
        width={150}
        height={150}/>
      <div>
        <span>
        Hello! I am Keerthivasan from Erode. I have experience in building
        website using ReactJS. I also know basics about Java. I built some
        projects in ReactJS.</span>
        <div className="overallFlex">
          <div className="detailsFlex">
            <div>
              <span className="heading">Age:</span>
              <span>21</span>
            </div>
            <div>
              <span className="heading">Phone:</span>
              <span>+91 9361444235</span>
            </div>
          </div>
          <div className="detailsFlex">
            <div>
              <span className="heading">Address:</span>
              <span>14/48,Seethakadhi Street,Erode</span>
            </div>
            <div>
              <span className="heading">Email:</span>
              <span>balakeerthi2710@gmail.com</span>
            </div>
          </div>
        </div>
        <button className="download">Download CV</button>
      </div>
    </div>
  );
}
