import React from "react";
import "./Contact.css";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import HomeIcon from '@mui/icons-material/Home';import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
export default function Contact() {
  return (
    <div className="PersonalSkills">
      <h1>Contact</h1>
      <div className="skillsFlex">
        <div className="skillsInnerFlex">
          <div>
            <LocalPhoneIcon sx={{ fontSize: "40px" }}/>
            <div className="title">Phone Number</div>
            <div className="content">+91 9361444235</div>
          </div>
          <div>
              <AlternateEmailIcon sx={{ fontSize: "40px" }}/>
            <div className="title">Email address</div>
            <div className="content">balakeerthi2710@gmail.com</div>
          </div>
        </div>
        <div className="skillsInnerFlex">
          <div>
            <HomeIcon sx={{ fontSize: "40px" }}/>
            <div className="title">Address</div>
            <div className="content">14/48,Seethakadhi street,Erode</div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
