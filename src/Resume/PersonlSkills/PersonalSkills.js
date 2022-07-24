import React from "react";
import "./PersonalSkills.css";
import GroupIcon from "@mui/icons-material/Group";
import AbcIcon from '@mui/icons-material/Abc';
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
export default function PersonalSkills() {
  return (
    <div className="PersonalSkills">
      <h1>Personal Skills</h1>
      <div className="skillsFlex">
        <div className="skillsInnerFlex">
          <div>
            <AbcIcon sx={{ fontSize: "60px" }}/>
            <div className="title">Communication</div>
            <div>Effective Communication in both English and Tamil</div>
          </div>
          <div>
              <SelfImprovementIcon sx={{ fontSize: "60px" }}/>
            <div className="title">Self Motivator</div>
            <div>Ability to motivate myself</div>
          </div>
        </div>
        <div className="skillsInnerFlex">
          <div>
            <LibraryBooksIcon sx={{ fontSize: "40px" }}/>
            <div className="title">Fast Learner</div>
            <div>Ability to grasp the new technology very quickly</div>
          </div>
          <div>
              <GroupIcon sx={{ fontSize: "40px" }} />
            <div className="title">Team Management</div>
            <div>Good in team management</div>
          </div>
        </div>
      </div>
    </div>
  );
}
