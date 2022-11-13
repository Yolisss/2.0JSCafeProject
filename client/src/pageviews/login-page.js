import React from "react";
import HotCoffeeData from "../components/hotcoffee";
import IceCoffeeData from "../components/icecoffee";
import { useAuth0 } from "@auth0/auth0-react";
import Navbarlist from "../components/navbarlist";
import Favdrinksform from "../components/favdrinksform";
import { useState } from "react";

export default function Home({ navChoice }) {
  const { isAuthenticated } = useAuth0();

  //navChoice is state
  //useState is keeping track current nav choice
  //navChoice is the state itself
  //setNavChoice is the function that updates the nav choice
  // const [navChoice, setNavChoice] = useState();
  return (
    <div className="App">
     
      <h3> User is {isAuthenticated ? "Logged in" : "Not logged in"} </h3>
    </div>
  );
}
