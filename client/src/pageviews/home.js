import React from "react";
import HotCoffeeData from "../components/hotcoffee";
import IceCoffeeData from "../components/icecoffee";

export default function Home() {
  return (
    <div>
      <HotCoffeeData />
      <IceCoffeeData />
    </div>
  );
}
