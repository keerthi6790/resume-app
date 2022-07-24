import React, { useEffect, useState } from "react";
import { Scene,Controller } from "scrollmagic";

import Education from "../Education/Education";
import Home from "../Home/Home";
import Language from "../Languages/Language";
import Personal from "../Personal/Personal";
import PersonalSkills from "../PersonlSkills/PersonalSkills";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";
import ContactForm from "../Contactform/ContactForm";
import Projects from "../Projects/Projects";
export default function Whole() {
  useEffect(()=>{
    var controller=new Controller();
    new Scene({
      triggerElement:"#HomeDisplay",
      triggerHook:"onLeave"
    })
    .setPin('#HomeDisplay')
    .addIndicators()
    .addTo(controller)
    new Scene({
      triggerElement:"#Personal",
      triggerHook:"onLeave"
    })
    .setPin("#Personal")
    .addIndicators()
    .addTo(controller)
},[])
  return (
    <div>
      <Home id="HomeDisplay" idName="HomeDisplay"/>
      <Personal id="Personal" idName="Personal"/>
      <Education />
      <Skills />
      <Language />
      <PersonalSkills />
      <Projects />
      <Contact />
      <ContactForm />
      {/* <img src="https://drive.google.com/uc?export=view&id=1rvzzTR8DQlNJl46EseVWe3cRLQKBs0R6"/> */}
    </div>
  );
}
