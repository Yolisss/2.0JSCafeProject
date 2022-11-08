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
    const response = await fetch(`http://localhost:2028/hotcoffee`);
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
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Ingredients</th>
            <th>Images</th>
            <th>Id</th>
          </tr>
        </thead>
      </table>
      {individualHotCoffee.map((cold, index) => {
        return (
          <div>
            <tr key={index}>
              <div>
                <td>{cold.title}</td>
              </div>
              <div>
                <td>{cold.description}</td>
              </div>
              <div>
                <td>{cold.ingredients}</td>
              </div>
              <div className="icecoffee-pictures">
                {" "}
                <td>
                  {/* inline style */}
                  <img src={cold.image} style={{ height: "443px" }}></img>
                </td>
                {/* <td>{cold.id}</td> */}
              </div>
              {/* <td><img src={trashicon} alt="Trash Can" onClick={() => handleDeleteAnimal(animal.id)}/></td> */}
              {/* <td><button onClick={() => handleDeleteAnimal(animal.id)}>DELETE</button></td> */}
            </tr>
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
