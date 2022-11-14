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
    const response = await fetch(`/icecoffee`);
    const data = await response.json();
    console.log(data);
    setIndividualsIceCoffee(data);
  };

  useEffect(() => {
    getIceCoffee();
  }, []);
  return (
    <div className="icecoffees">
      <h2> List of Ice Coffees</h2>
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
      {individualIceCoffee.map((cold, index) => {
        return (
          <tr key={index}>
            <td>{cold.title}</td>
            <td>{cold.description}</td>
            <td>{cold.ingredients}</td>
            <img src={cold.image} style={{ height: "443px" }}></img>
            {/* <td>{cold.id}</td> */}
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
export default IceCoffeeData;
