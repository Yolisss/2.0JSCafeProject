import { useState, useEffect } from "react";
import React from "react";
import ReactDOM from "react-dom";
// import { useReducer } from "react";
// const IceCoffee = () => {
//   return <h1>Hello Ice Coffee</h1>;
// };
// export default IceCoffee;
const IceCoffeeData = () => {
  //[] allows us to store multiple values
  const [individualIceCoffee, setIndividualsIceCoffee] = useState([]);

  //get individuals data table
  const getIceCoffee = async () => {
    const response = await fetch(`/icecoffeefacts`);
    const data = await response.json();
    console.log(data);
    setIndividualsIceCoffee(data);
  };

  useEffect(() => {
    getIceCoffee();
  }, []);
  return (
    <div className="icecoffeescss">
      <h2> List of Ice Coffees</h2>
      {/* <div>
        <div className="icetitlenames">
          <div className="titlename">Title</div>
          <div>Description</div>
          <div>Ingredients</div>
          <div>Images</div>
        </div>
      </div> */}
      <div className="icecard_grid">
        {individualIceCoffee.map((cold, index) => {
          return (
            <div className="icecoffee_card">
              <div class="icecontainer">{cold.title}</div>
              <div className="icecard_image_container">
                {/* <img src={cold.image} style={{ height: "443px" }}></img> */}
                <img src={cold.image} className="actualimg"></img>
              </div>
              <p>{cold.description}</p>
              <p>{cold.ingredients}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

//initialistate of the form will be empty
//   const initialState = {
//     id: "",
//     nick_name: "",
//     individuals_id: "",
//     seen_on: "",
//   };
export default IceCoffeeData;
