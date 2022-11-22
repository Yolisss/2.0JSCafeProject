import { useState, useEffect } from "react";
import React from "react";
import ReactDOM from "react-dom";
// import { useReducer } from "react";
// const IceCoffee = () => {
//   return <h1>Hello Ice Coffee</h1>;
// };
// export default IceCoffee;
const HotCoffeeData = () => {
  //[] allows us to store multiple values
  const [individualHotCoffee, setIndividualsHotCoffee] = useState([]);

  //get individuals data table
  const getHotCoffee = async () => {
    const response = await fetch(`/hotcoffee`);
    const data = await response.json();
    console.log(data);
    setIndividualsHotCoffee(data);
  };

  useEffect(() => {
    getHotCoffee();
  }, []);
  return (
    <div className="hotcoffees">
      <h2> List of Hot Coffees</h2>
      {/* <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Ingredients</th>
            <th>Images</th>
            <th>Id</th>
          </tr>
        </thead> */}
      {/* </table> */}
      {individualHotCoffee.map((cold, index) => {
        return (
          <div>
            <div className="hotcoffees" class="cards">
              <div class="card">
                <div class="card__content">
                  {cold.title}
                  <p>{cold.description}</p>
                  <p>{cold.ingredients}</p>

                  {/* inline style */}
                  <div>
                    <img
                      src={cold.image}
                      class="card__image"
                      style={{ height: "443px" }}
                    ></img>
                  </div>
                </div>
              </div>
              {/* <td>{cold.id}</td> */}
            </div>
          </div>
        );
      })}
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
export default HotCoffeeData;
