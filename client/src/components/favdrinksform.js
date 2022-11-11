import React from "react";

export default function Favdrinksform() {
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
            <input name="name" />
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
