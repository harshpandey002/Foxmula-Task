import React, { useState, useRef, useEffect } from "react";
import landscape from "../img/landscape.png";
import sky from "../img/sky.png";
import "./TaskOne.css";

function TaskOne({ setTask }) {
  const text = useRef(null);
  const [scroll, setScroll] = useState(0);

  window.addEventListener("scroll", () => {
    setScroll(window.scrollY);
  });

  useEffect(() => {
    text.current.style.top = scroll * 0.3 + "px";
  }, [scroll]);

  return (
    <div className="wrapper">
      <button onClick={() => setTask(false)} id="one">
        Task 2
      </button>
      <div className="section--one">
        <img src={sky} alt="sky" />
        <img src={landscape} alt="landscape" />
        <h1 ref={text} id="text">
          TREKK
        </h1>
      </div>
      <div className="section--two"></div>
    </div>
  );
}

export default TaskOne;
