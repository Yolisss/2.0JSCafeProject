import React from "react";
import SiteHeader from "../components/nav-bar";
import AuthenticationButton from "./authentication-button";
import { useAuth0 } from "@auth0/auth0-react";
import Logo from "../images/logo.png";

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
              <img className="js-logo" src={Logo} alt="javasweet-logo" />
              <li className="navlist1">
                <a href="/" className="logo-name">
                  Home
                </a>
              </li>
              <li className="navlist1">
                <a href="/hotcoffee">Hot Coffee</a>
              </li>
              <li className="navlist1">
                <a href="/icecoffee">Ice Coffee</a>
              </li>
              <li className="navlist1">
                <a href="/coffeefacts">Coffee Facts</a>
              </li>
              <li className="navlist1">
                <a href="/gallery">Gallery</a>
              </li>
              <li className="navlist1">
                <a href="/mydrinks">My Drinks</a>
              </li>
            </>
          )}

          <li className="navlist1">
            <AuthenticationButton />
          </li>
        </ul>
      </nav>
    </div>
  );
}
