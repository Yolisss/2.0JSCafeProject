import React from "react";
import HotCoffeeData from "../components/hotcoffee";
import IceCoffeeData from "../components/icecoffee";
import { useAuth0 } from "@auth0/auth0-react";
import Navbarlist from "../components/navbarlist";

export default function Home() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="App">
      {/* //conditional rendering: if this is true, make this appear, if false do nothing  */}
      {isAuthenticated && (
        <>
          <Navbarlist />
          <IceCoffeeData />
          <HotCoffeeData />
        </>
      )}
      <h3> User is {isAuthenticated ? "Logged in" : "Not logged in"} </h3>
    </div>
  );
}
