import React, { useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import "./App.css";
import Whole from "./Resume/Whole/Whole";
function App() {
  useEffect(()=>{
    const cursor=document.querySelector('#cursor');
    document.addEventListener('mousemove',(e)=>{
      cursor.setAttribute("style",'top:'+e.pageY+"px;left:"+e.pageX+"px")
    })
  })
  return (
    <div>

    <div id="cursor"></div>
      <Navbar />
      <Whole />
    </div>
  );
}

export default App;
