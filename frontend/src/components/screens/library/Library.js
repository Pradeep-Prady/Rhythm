import React, { useEffect, useState } from "react";
import apiClient from "../../../spotify";
import "./library.css";
import { AiFillPlayCircle } from "react-icons/ai";
import { useNavigate } from 'react-router-dom'
export default function Library() {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    apiClient.get("me/playlists").then((response) => {
      setPlaylists(response.data.items);
    });
  }, []);
  //  playlists.map((playlist) => console.log(playlist.images[0].url)
  //  )

  const navigate = useNavigate();

  const playPlaylist = (id) => {
    navigate("player", { state: { id: id } });
  };

  return (
    <>
      <div className="screen-container">
        <div className="library-body">
          {playlists.map((playlist) => {
            return (
              <div
                key={playlist.id}
                className="playlist-card"
                onClick={() => playPlaylist(playlist.id)}
              >
                <img
                  src={
                    playlist.images[0]
                      ? playlist.images[0].url
                      : "/frontend/public/logo512.png"
                  }
                  alt="playlist-img"
                />
                <p className="playlist-title">{playlist.name}</p>
                <p className="playlist-subtitle">
                  {playlist.tracks.total} Songs
                </p>
                <div className="playlist-fade">
                  <i className="fa-solid fa-play play-icon"></i>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
