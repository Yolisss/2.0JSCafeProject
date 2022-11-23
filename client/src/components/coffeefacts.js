import React from "react";
import { useState, useEffect } from "react";
// import CoffeePic from "../assets2/coffee2.jpeg";
import CoffeeFirstPhoto from "../assets2/coffeephoto11.jpg";
import CoffeeSecondPhoto from "../assets2/coffeephoto12.jpg";
import CoffeeThirdPhoto from "../assets2/coffeefacts1.jpg";
import CoffeeFourthPhoto from "../assets2/coffeephoto13.jpg";
import CoffeeFifthPhoto from "../assets2/coffeephoto15.jpg";

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
      <div className="coffeefactcontainer">
        <div className="coffeefacttitle">Did you know?</div>
        <img className="factphotos" src={CoffeeFifthPhoto} />
        <div className="coffeefactborder">
          <div className="actualfacttitle">{coffeeFact.fact}</div>
          <br></br>
          <div className="factdescriptionholder">{coffeeFact.description}</div>
          <br></br>
          {/* <button onClick={getFact}>Get Coffee Fact</button> */}
        </div>
        <div className="factbutton">
          <button onClick={getFact}>Get Coffee Fact</button>
        </div>
        <div>
          <img className="factphotos" src={CoffeeThirdPhoto} />
        </div>
        <div>
          <img className="factphotos" src={CoffeeFirstPhoto} />
        </div>
        <div>
          <img className="factphotos" src={CoffeeSecondPhoto} />
        </div>
        <div>
          <img className="factphotos" src={CoffeeFourthPhoto} />
        </div>
        {/* <img src={CoffeePic} /> */}
      </div>
    </>
  );
}
