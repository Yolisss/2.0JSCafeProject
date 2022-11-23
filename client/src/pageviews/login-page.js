import React from "react";
import HotCoffeeData from "../components/hotcoffee";
import IceCoffeeData from "../components/icecoffee";
import { useAuth0 } from "@auth0/auth0-react";
import Navbarlist from "../components/navbarlist";
import Favdrinksform from "../components/favdrinksform";
import { useState } from "react";
import { Link } from "react-router-dom";
import VideoHolder from "../components/videoholder";
import LogoutButton from "../components/logout-button";
import Imageslider from "../components/imageslider";
import { Sliderdata } from "../components/sliderdata";

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
          <div>
            <VideoHolder />
          </div>
        </div>
      ) : (
        <div margin-top="100px">
          <div className="greetinguser">
            Hello <Link to="api/me">{user.name}</Link>
          </div>
          <div className="text-intro">
            JavaSweet Cafe exists to inspire others by providing a space where
            we share our secret of making our flavorful drinks right at the
            comfort of your home. We also create a space where you can upload
            and save your drinks that you've created.
          </div>
          <div>
            <Imageslider slides={Sliderdata} />
          </div>
          <footer></footer>
        </div>
      )}
    </div>
  );
}
