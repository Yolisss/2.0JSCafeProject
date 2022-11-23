import React from "react";
import SiteHeader from "../components/nav-bar";
import AuthenticationButton from "./authentication-button";
import { useAuth0 } from "@auth0/auth0-react";
import Logo from "../images/logo.png";
import { Link } from "react-router-dom";

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
                <Link to="/" className="logo-name">
                  Home
                </Link>
              </li>
              <li className="navlist1">
                <Link to="/hotcoffee">Hot Coffee</Link>
              </li>
              <li className="navlist1">
                <Link to="/icecoffee">Ice Coffee</Link>
              </li>
              <li className="navlist1">
                <Link to="/coffeefacts">Coffee Facts</Link>
              </li>
              {/* <li className="navlist1">
                <Link to="/gallery">Gallery</Link>
              </li> */}
              <li className="navlist1">
                <Link to="/mydrinks">My Drinks</Link>
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
