import React, { useEffect, useState } from "react";
import { authUrl, loginEndpoint } from "../../../spotify";
import "./login.css";

const clientId = "745816b0ce074c41b9cffa3b4e2b8445";
const clientSecret = "14e076c74abd4fb5acf7412536ad70e4";

export default function Login() {

  const [ accessToken, secretAccessToken] = useState("")
  useEffect(() => {
    var authParameters = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },

      body:
        "grant_type=client_credentials&client_id=" +
        clientId +
        "&client_secret=" +
        clientSecret,
    };

    fetch("https://accounts.spotify.com/api/token", authParameters)
      .then((result) => result.json())
      .then((data) => console.log(data.access_token));
  }, []);

  return (
    <div className="login-container">
      
      <img
        src="https://th.bing.com/th/id/R.c2a12cba057711495849088844f950cc?rik=982VbYW4HE09lQ&riu=http%3a%2f%2f1000logos.net%2fwp-content%2fuploads%2f2017%2f08%2fSpotify-Logo.png&ehk=Gcl8lyv0FdI4gDVyKLmVCVfNf8yc1xDmAvEDyPzt8Bk%3d&risl=&pid=ImgRaw&r=0"
        alt="spotigy-logo"
        className="logo"
      />

      <a >
        <div className="login-btn">Login</div>
      </a>

    </div>
  );
}
