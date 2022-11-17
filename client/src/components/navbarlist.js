import React from "react";
import SiteHeader from "../components/nav-bar";
import AuthenticationButton from "./authentication-button";
import { useAuth0 } from "@auth0/auth0-react";

export default function Navbarlist() {
  const { user } = useAuth0();
  return (
    // {user && (<AuthenticationButton />)}
    <div>
      <nav className="nav">
        {/* first pair letting you know you're working with js
        second curly brace is letting it know its an object */}
        <ul className="navflex">
          {user && (
            <>
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
            </>
          )}

          <li>
            <AuthenticationButton />
          </li>
        </ul>
      </nav>
    </div>
  );
}
