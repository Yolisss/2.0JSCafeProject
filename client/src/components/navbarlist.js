import React from "react";

export default function Navbarlist() {
  return (
    <div>
      <nav className="nav">
        {/* first pair letting you know you're working with js
        second curly brace is letting it know its an object */}
        <ul className="navflex">
          <li>
            <a href="/home" className="logo-name">
              Home
            </a>
          </li>
          <li>
            <a href="/hotcoffee">Hot Coffee</a>
          </li>
          <li>
            <a href="/icecoffee">Ice Coffee</a>
          </li>
          <li>
            <a href="/coffeefacts">Coffee Facts</a>
          </li>
          <li>
            <a href="/gallery">Gallery</a>
          </li>
          <li>
            <a href="/mydrinks">My Drinks</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
