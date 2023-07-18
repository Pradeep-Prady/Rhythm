import React from "react";
import "./songcard.css";

export default function AlbumInfo({ album }) {
  const artists = [];
  album?.artists.forEach((artist) => {
    artists.push(artist.name);
  });

  return (
    <div className="albuminfo-card">
      <div className="album-name">
        {/* artists?.join(", ") */}
        <div className="marquee">
          <span className="span">{album?.name}</span>
        </div>
      </div>

      <div className="album-info">
        <span>{`${album?.name} is an ${album?.album_type} by ${artists?.join(
          ", "
        )}  with ${album?.total_tracks} track(s)`}</span>
      </div>

      <div className="album-release">
        <span>Release Date : {album?.release_date}</span>
      </div>
    </div>
  );
}
