import React from "react";
import "./queue.css";

export default function Queue({ tracks, setCurrentIndex }) {
 
  return (
    <div className="queue-container">
      <div className="queue">
        <p className="upnext">Up Next</p>
        <div className="queue-list">
          {tracks?.map((track,index) => (
            <div className="queue-item" onClick={() => setCurrentIndex(index)}>
              <p className="trackname">{track?.track.name}</p>
              <p>0: 2.34</p>
            </div>
          ))}
        </div>
        {/* <p>hello</p> */}
      </div>
    </div>
  );
}
