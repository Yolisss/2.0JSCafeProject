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
    <div>
      <div className="icemaintitle">
        <h2> List of Ice Coffees</h2>
      </div>
      {/* <div>
        <div className="icetitlenames">
          <div className="titlename">Title</div>
          <div>Description</div>
          <div>Ingredients</div>
          <div>Images</div>
        </div>
      </div> */}
      {individualIceCoffee.map((cold, index) => {
        return (
          <div className="icecoffees" key={index}>
            <div>{cold.title}</div>
            <br></br>
            <div>{cold.description}</div>
            <br></br>
            <div>{cold.ingredients}</div>
            <img src={cold.image} style={{ height: "443px" }}></img>
            {/* <td>{cold.id}</td> */}
            {/* <td><img src={trashicon} alt="Trash Can" onClick={() => handleDeleteAnimal(animal.id)}/></td> */}
            {/* <td><button onClick={() => handleDeleteAnimal(animal.id)}>DELETE</button></td> */}
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
export default IceCoffeeData;
