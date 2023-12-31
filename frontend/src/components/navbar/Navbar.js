import React, { useEffect, useState } from "react";
import "./navbar.css";
import NavButton from "./NavButton";
import { MdSpaceDashboard, MdFavorite } from "react-icons/md";
import { FaGripfire, FaPlay, FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import apiClient from "../../spotify";

export default function Navbar() {
  const [image, setImage] = useState(
    "https://i.pinimg.com/originals/b3/2c/9c/b32c9c4854abc5925c2d64ee046f02f7.jpg"
  );
  useEffect(() => {
    apiClient.get("me").then(response => {
     
      setImage(response.data.images[0].url)
    })

  });

  return (
    
    <div className="navbar-container">
      <div className="profile-container">
        <img className="profile" src={image} alt="profile" />
      </div>
      <div className="nav-btn-container">
        <NavButton title="Feed" to="/feed" icon={<MdSpaceDashboard />} />
        <NavButton title="Trending" to="/trending" icon={<FaGripfire />} />
        <NavButton title="Player" to="/player" icon={<FaPlay />} />
        <NavButton title="Favorities" to="/favorities" icon={<MdFavorite />} />
        <NavButton title="Library" to="/" icon={<IoLibrary />} />
      </div>
      <NavButton title="Account" to="/profile" icon={<FaSignOutAlt />} />
    </div>
  );
}
