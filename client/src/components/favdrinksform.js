import React from "react";
import { useState, useEffect } from "react";

export default function Favdrinksform() {
  const [newDrink, setNewDrink] = useState([]);

  //get new_drinks data table
  const getDrinks = async () => {
    const response = await fetch(`http://localhost:4042/contacts`);
    const data = await response.json();
    console.log(data);
    setNewDrink(data);
  };

  useEffect(() => {
    getDrinks();
  }, []);

  //initialistate of the form will be empty
  const initialState = {
    id: "",
    title: "",
    description: "",
    ingredients: "",
    image: "",
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    alert("You have submitted the form");
  };
  return (
    <div className="wrapper">
      <h1>Add More Drinks</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Name</p>
            <input type="text" placeholder="name" />
          </label>
          <label>
            <p>Name of Drink</p>
            <input name="nameofdrink" />
          </label>
          <label>
            <p>Description</p>
            <input name="description" />
          </label>
          <label>
            <p>Ingredients</p>
            <input name="ingredients" />
          </label>
          <label>
            <p>Images</p>
            <input name="images" />
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
