import React from "react";
import HotCoffeeData from "../components/hotcoffee";
import IceCoffeeData from "../components/icecoffee";
import { useAuth0 } from "@auth0/auth0-react";
import Navbarlist from "../components/navbarlist";
import Favdrinksform from "../components/favdrinksform";
import { useState } from "react";
import { Link } from "react-router-dom";
import VideoHolder from "../components/videoholder";

export default function Home({ navChoice, user }) {
  const { isAuthenticated } = useAuth0();

  //navChoice is state
  //useState is keeping track current nav choice
  //navChoice is the state itself
  //setNavChoice is the function that updates the nav choice
  // const [navChoice, setNavChoice] = useState();
  return (
    <div className="App">
      {!user ? (
        <div className="greetings">
          <span>JavaSweet Cafe</span>
          <div>
            <VideoHolder />
          </div>
        </div>
      ) : (
        <div>
          <span>
            Hello <Link to="api/me">{user.name}</Link>
          </span>
        </div>
      )}
    </div>
  );
}

//  <div className="greetingsimage">
//    <img
//      src="https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_33/2203981/171026-better-coffee-boost-se-329p.jpg"
//      alt="Logo"
//      style={{ height: "443px" }}
//    />
//  </div>;
