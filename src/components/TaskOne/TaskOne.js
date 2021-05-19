import React from "react";
import landscape from "../img/landscape.png";
import sky from "../img/sky.png";
import "./TaskOne.css";
function TaskOne() {
  const text = document.getElementById("text");

  window.addEventListener("scroll", () => {
    let scroll = window.scrollY;

    text.style.top = scroll * 0.3 + "px";
  });
  return (
    <div className="container">
      <div className="section--one">
        <img src={sky} alt="sky" />
        <img src={landscape} alt="landscape" />
        <h1 id="text">TREKK</h1>
      </div>
      <div className="section--two"></div>
    </div>
  );
}

export default TaskOne;
