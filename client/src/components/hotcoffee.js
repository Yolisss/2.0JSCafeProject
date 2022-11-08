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
          <tr key={index}>
            <td>{cold.title}</td>
            <td>{cold.description}</td>
            <td>{cold.ingredients}</td>
            <td>
              <img src={cold.image}></img>
            </td>
            <td>{cold.id}</td>
            {/* <td><img src={trashicon} alt="Trash Can" onClick={() => handleDeleteAnimal(animal.id)}/></td> */}
            {/* <td><button onClick={() => handleDeleteAnimal(animal.id)}>DELETE</button></td> */}
          </tr>
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
