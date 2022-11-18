import React from "react";
import coffeevideo from "../assets/coffeevideo.mp4";

export default function VideoHolder() {
  return (
    <div className="videoholder">
      <video src={coffeevideo} autoPlay loop muted />
    </div>
  );
}
