import React from "react";
import { useState, useEffect } from "react";

export default function Coffeefacts() {
  const [coffeeFact, setCoffeeFact] = useState([]);

  //get new_drinks data table
  const getFact = async () => {
    const response = await fetch(`/coffeefacts`);
    const data = await response.json();
    console.log(data);
    setCoffeeFact(data);
  };

  useEffect(() => {
    getFact();
  }, []);

  //initialistate of the form will be empty
  const initialState = {
    id: "",
    fact: "",
  };
  return (
    <>
      {coffeeFact.map((coffeeFact, index) => {
        return (
          <div>
            <tr key={index}>
              <div>
                <td>{coffeeFact.fact}</td>
              </div>
              <div>
                <td>{coffeeFact.description}</td>
              </div>
            </tr>
          </div>
        );
      })}
    </>
  );
}
