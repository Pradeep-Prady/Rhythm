import React from "react";
import "./controls.css";
import { IconContext } from "react-icons";
import { FaPause } from "react-icons/fa";

import { IoPlaySkipBack, IoPlay, IoPlaySkipForward } from "react-icons/io5";

export default function Controls({
  isPlaying,
  setIsPlaying,
  handleNext,
  handlePrev,
}) {
  return (
    // <IconContext.Provider value={{ size: "25px" }}>
      <div className="controls-wrapper">
        <div className="action-btn" onClick={handlePrev}>
          <IoPlaySkipBack />
        </div>
        <div
          className={isPlaying ? "play-pause-btn active" : "play-pause-btn"}
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? <FaPause  /> : <IoPlay  />}
        </div>
        <div className="action-btn" onClick={handleNext}>
          <IoPlaySkipForward />
        </div>
      </div>
    // </IconContext.Provider>
  );
}
