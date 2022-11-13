import React from "react";

export default function Navbarlist() {
  return (
    <div>
      <nav className="nav">
        <a href="/" className="logo-name">
          JavaSweet Cafe
        </a>
        <ul>
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
