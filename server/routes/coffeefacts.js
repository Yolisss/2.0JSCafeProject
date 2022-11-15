//server connected to db
const db = require("../db/db-connection.js");
const express = require("express");

//telling express for which handlers to use
const router = express.Router();
/* GET users listing. */

//9-20 considered request handler
//within it we are using a try/catch block
router.get("/", async function (req, res) {
  try {
    const fact = await db.query("SELECT * FROM coffee_facts ORDER BY id");
    //send the data back to the server based on the species that came from the db
    res.send(fact.rows);
    //catch unexpected errors
    //console log err
    //and send response with a 400 error to client
  } catch (e) {
    console.log(e);
    return res.status(500).json({ e });
  }
});

//"/" main part where you're storing the information
//post request
router.post("/coffeefact", async (req, res) => {
  const coffeeFact = {
    //server targetting these values
    id: req.body.id,
    fact: req.body.fact,
    description: req.body.description,
  };
  console.log(coffeeFact);
  //try is inserting it into our db
  try {
    const createdDrinkFact = await db.query(
      `INSERT INTO coffee_facts(fact) VALUES($1) RETURNING *`,
      [coffeeFact.fact, coffeeFact.description]
    );
    console.log(createdDrinkFact);
    //it'll be added to database
    res.send(createdDrinkFact);
    //if you can't, return an error
  } catch (e) {
    console.log(e);
    return res.status(400).json({ e });
  }
});

//delete request
//router is your "/", in this case "/:id"; where you'll be
//directing the data to
//for ex, this is directing it specifically to the id
router.delete("/:id", async (req, res) => {
  //if you find id within the function, delete it
  const drinksId = req.params.id;
  try {
    await db.none("DELETE FROM coffee_facts WHERE id=$1", [drinksId]);
    res.send({ status: "success" });
  } catch (e) {
    //if you don't have it, bring back an error
    return res.status(500).json({ e });
  }
});

//this allows for this router to be used in other files
module.exports = router;
