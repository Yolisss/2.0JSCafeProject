import React from "react";
import { useState, useEffect } from "react";
import { useReducer } from "react";
//userReducer used wherever form is

//useReducer good to update multiple items vs useState that updates
//one item at a time
//state is how useReducer reads values and stores new value
//initial state will contain your initial data (ex. id, nickname etc)
//reducer is what's going to be updating your data
//state is current value
//action will be what will be passed to your reducer
const reducer = (state, action) => {
  console.log(action, "this is the action");
  //telling reducer we need an action to do the following:
  switch (action.type) {
    case "editID":
      console.log("Logged if the editID action is being dispatched");
      //payload: info used to modify your state
      return { ...state, id: action.payload };

    case "editTitle":
      return { ...state, title: action.payload };

    case "editDescription":
      return { ...state, description: action.payload };

    case "editIngredients":
      return { ...state, ingredients: action.payload };

    case "editImage":
      return { ...state, image: action.payload };

    case "clearForm":
      return { id: "", title: "", description: "", ingredients: "", image: "" };
    //basically an else statement
    default:
      return state;
  }
};

export default function Favdrinksform() {
  const [newDrink, setNewDrink] = useState([]);

  //get new_drinks data table
  const getDrink = async () => {
    const response = await fetch(`http://localhost:2028/newdrinks`);
    const data = await response.json();
    console.log(data);
    setNewDrink(data);
  };

  useEffect(() => {
    getDrink();
  }, []);

  //initialistate of the form will be empty
  const initialState = {
    id: "",
    title: "",
    description: "",
    ingredients: "",
    image: "",
  };

  //dispatch is initiate the reducer function; reducer is a callback
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  const handleAddDrink = async (e) => {
    e.preventDefault();

    const newDrink = {
      id: state.id,
      title: state.title,
      description: state.description,
      ingredients: state.ingredients,
      image: state.image,
    };
    console.log(newDrink);
    //New Indiv data will be sent to server and new data will be posted
    const response = await fetch("http://localhost:2028/newdrinks", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newDrink),
    });
    const content = await response.json();
    setNewDrink([...newDrink, content]);
    //calling a specific part of your reducer type
    //whenever we press submit, all the values in the boxes will be cleared
    dispatch({ type: "clearForm" });
  };

  //delete individual handler
  const handleDeleteContact = async (deleteId) => {
    //
    const response = await fetch(
      `http://localhost:2028/newdrinks/${deleteId}`,
      {
        method: "DELETE",
      }
    );
    await response.json();
    const deleteDrinkFunction = newDrink.filter(
      (drink) => newDrink.id !== deleteId
    );
    setNewDrink(deleteDrinkFunction);
  };
  const [searchTerm, setSearchTerm] = useState("");

  //   const handleSubmit = (event) => {
  //     event.preventDefault();

  //     alert("You have submitted the form");
  return (
    <>
      {newDrink.map((newDrink, index) => {
        return (
          <div>
            <tr key={index}>
              <div>
                <td>{newDrink.title}</td>
              </div>
              <div>
                <td>{newDrink.description}</td>
              </div>
              <div>
                <td>{newDrink.ingredients}</td>
              </div>
              <div className="icecoffee-pictures">
                {" "}
                <td>
                  {/* inline style */}
                  <img src={newDrink.image} style={{ height: "443px" }}></img>
                </td>
                {/* <td>{cold.id}</td> */}
              </div>
              {/* <td><img src={trashicon} alt="Trash Can" onClick={() => handleDeleteAnimal(animal.id)}/></td> */}
              {/* <td><button onClick={() => handleDeleteAnimal(animal.id)}>DELETE</button></td> */}
            </tr>
          </div>
        );
      })}
      <div className="addDrink">
        <header className="add-drink-header">Add a new Drink</header>
        <form id="add-drink" action="#" onSubmit={handleAddDrink}>
          <fieldset>
            <label>Title: </label>
            <br></br>
            <input
              type="text"
              id="add-drinkTitle-name"
              placeholder="Name"
              value={state.title}
              onChange={(e) =>
                dispatch({
                  type: "editTitle",
                  payload: e.target.value,
                })
              }
            />
            <br></br>
            <label>Description: </label>
            <br></br>
            <input
              type="text"
              id="add-drink-description"
              placeholder="Description"
              value={state.description}
              onChange={(e) =>
                dispatch({
                  type: "editDescription",
                  payload: e.target.value,
                })
              }
            />
            <br></br>
            <label>Ingredients: </label>
            <br></br>
            <input
              type="text"
              id="add-drink-ingredients"
              placeholder="ingredients"
              value={state.ingredients}
              onChange={(e) =>
                dispatch({
                  type: "editIngredients",
                  payload: e.target.value,
                })
              }
            />
            <br></br>
            <label>Image: </label>
            <br></br>
            <input
              type="text"
              id="add-drink-image"
              placeholder="image"
              value={state.image}
              onChange={(e) =>
                dispatch({
                  type: "editImage",
                  payload: e.target.value,
                })
              }
            />
          </fieldset>
          {/* Add more form fields here */}
          <input type="submit" />
        </form>
      </div>
    </>
  );
}
