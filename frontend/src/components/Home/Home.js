import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Library from "../screens/library/Library";
import Feed from "../screens/feed/Feed";
import Trending from "../screens/trending/Trending";
import Player from "../screens/player/Player";
import Favorities from "./../screens/favorities/Favorities";

import "./home.css";
import Navbar from "../navbar/Navbar";
import Login from "../screens/auth/Login";

export default function Home() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const hash = window.location.hash;

    const _token = hash.split("&")[0].split("=")[1];
    window.localStorage.setItem("token", _token);
    setToken(_token);
    console.log(token);
  }, [token]);

  return (
    <>
      {!token ? (
        <Login />
      ) : (
        <Router>
          <div className="home-container">
            // <Navbar />
            //{" "}
            <Routes>
              // <Route path="/" element={<Library />} />
              // <Route path="/feed" element={<Feed />} />
              // <Route path="/trending" element={<Trending />} />
              // <Route path="/player" element={<Player />} />
              // <Route path="/favorities" element={<Favorities />} />
              //{" "}
            </Routes>
          </div>
        </Router>
      )}
    </>
  );
}
