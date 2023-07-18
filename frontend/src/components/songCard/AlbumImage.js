import React from "react";
import "./songcard.css";

export default function AlbumImage({ url }) {
  return (
    <div className="album-image flex">
      <img src={url} alt="pic" />
      <div className="shadow">
        <img src={url} alt="pic" />
      </div>
    </div>
  );
}
