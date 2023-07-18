import React, { useEffect, useState } from "react";

import "./player.css";
import { useLocation } from "react-router-dom";
import apiClient from "../../../spotify";

import Queue from "./../../queue/Queue";
import SongCard from "./../../songCard/SongCard";
import AudioPlayer from "../../audioplayer/AudioPlayer";
import Widgets from "../../widgets/Widgets";
export default function Player() {
  const location = useLocation();

  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (location.state) {
      apiClient
        .get("playlists/" + location.state?.id + "/tracks")
        .then((res) => {
          setTracks(res.data.items);
          setCurrentTrack(res.data.items[0].track);
        });
    }
  }, [location.state]);

  useEffect(() => {
    setCurrentTrack(tracks[currentIndex]?.track);
  }, [currentIndex, tracks]);
  return (
    <div className="screen-container">
      <div className="player-container row">
        <div className="left-player-body col-md-8">
          <AudioPlayer
            currentTrack={currentTrack}
            total={tracks}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />

          <Widgets artistID={currentTrack?.album?.artists[0]?.id} />
        </div>
        <div className="right-player-body col-md-4">
          <SongCard album={currentTrack?.album} />
          <Queue tracks={tracks} setCurrentIndex={setCurrentIndex} />
        </div>
      </div>
    </div>
  );
}
