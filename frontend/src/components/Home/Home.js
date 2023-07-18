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
import { setClientToken } from "../../spotify";

const clientId = "745816b0ce074c41b9cffa3b4e2b8445";
const clientSecret = "14e076c74abd4fb5acf7412536ad70e4";

export default function Home() {
  // const [token, setToken] = useState("");
  // useEffect(() => {
  //   const initialToken = window.localStorage.getItem("token");
  //   if (!initialToken) {
  //     var authParameters = {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/x-www-form-urlencoded",
  //       },
  //       body:
  //         "grant_type=client_credentials&client_id=" +
  //         clientId +
  //         "&client_secret=" +
  //         clientSecret,
  //     };

  //     fetch("https://accounts.spotify.com/api/token", authParameters)
  //       .then((result) => result.json())
  //       .then((data) => {
  //         const newToken = data.access_token; // Store the new token in a separate variable
  //         setToken(newToken);
  //         window.localStorage.setItem("token", newToken);
  //         setClientToken(newToken);
  //       })
  //       .catch((error) => {
  //         // Handle any errors that occurred during the fetch request
  //         console.log("Error:", error);
  //       });
  //   } else {
  //     setToken(initialToken); // Use 'initialToken' instead of 'token'
  //     setClientToken(initialToken); // Use 'initialToken' instead of 'token'
  //   }
  // }, []);

  const [token, setToken] = useState("");
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash = "";

    if (!token && hash) {
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token);
      setToken(_token);
      setClientToken(_token)
    } else {
      setToken(token);
      setClientToken(token)
    }
  }, []);

  return (
    <>
      {!token ? (
        <Login />
      ) : (
        <Router>
          <div className="home-container">
            <Navbar />

            <Routes>
              <Route path="/" element={<Library />} />
              <Route path="/feed" element={<Feed />} />
              <Route path="/trending" element={<Trending />} />
              <Route path="/player" element={<Player />} />
              <Route path="/favorities" element={<Favorities />} />{" "}
            </Routes>
          </div>
        </Router>
      )}
    </>
  );
}
