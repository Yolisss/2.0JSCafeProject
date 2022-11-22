import React from "react";
import { useState, useEffect } from "react";

export default function Coffeefacts() {
  const [coffeeFact, setCoffeeFact] = useState([]);

  //get new_drinks data table
  const getFact = async () => {
    //fetching info from table
    const response = await fetch(`/coffeefacts`);
    const data = await response.json();
    console.log(data);
    //math floor is just used to let you use math.random
    let random = Math.floor(Math.random() * data.length);
    //for the data your recieving, you want to randomize it
    //setting current coffee fact to random coffee fact
    setCoffeeFact(data[random]);
  };

  useEffect(() => {
    getFact();
  }, []);

  return (
    <>
      <div className="coffeefacttitle">Did you know?</div>
      <div className="coffeefact">
        <p>{coffeeFact.fact}</p>
        <p>{coffeeFact.description}</p>
        <br></br>
        <button onClick={getFact}>Get Coffee Fact</button>
      </div>
    </>
  );
}
