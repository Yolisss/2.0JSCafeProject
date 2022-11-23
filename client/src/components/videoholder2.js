import React from "react";
import CoffeeBeans from "../assets/coffeebeans.mp4";

export default function VideoHolder2() {
  return (
    <div className="videoholder">
      <video src={CoffeeBeans} autoPlay loop muted />
    </div>
  );
}
