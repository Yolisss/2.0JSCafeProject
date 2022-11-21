import React from "react";
import coffeevideo from "../assets/coffeevideo.mp4";

export default function VideoHolder() {
  return (
    <div className="videoholder">
      <div className="content">
        <h1>Welcome to</h1>
        <p>JavaSweet Cafe</p>
      </div>
      <video src={coffeevideo} autoPlay loop muted />
    </div>
  );
}
