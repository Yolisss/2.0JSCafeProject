const express = require("express");
const cors = require("cors");
require("dotenv").config();
const db = require("./db/db-connection.js");
const fetch = require("node-fetch");
const router = require("./routes/favdrinksform.js");
const app = express();

const PORT = 2028;
app.use(cors());
app.use(express.json());

// creates an endpoint for the route /api
app.get("/", (req, res) => {
  res.json({ message: "Hello from My template ExpressJS" });
});

// create the get request
app.get("/icecoffee", (req, res) => {
  let URL = `https://api.sampleapis.com/coffee/iced`;
  console.log("Ice Coffee was recieved");
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      res.send(data);
    });
});

app.get("/hotcoffee", (req, res) => {
  let URL = `https://api.sampleapis.com/coffee/hot`;
  console.log("Hot Coffee was recieved");
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      res.send(data);
    });
});

//router obj is importing all of the routes from your favdrinkform.js
//the actual process that running the server is located in the app
//app has its own routes like line 29
//router has its own routes but both of them are completely seperate
//in order for app to use routes from router, thats where app.use comes into play
//"make sure to use these other routes as well"
//every routes insider of the router object is going to have a prefix of new drinks

app.use("/newdrinks", router);

// create the POST request
// app.post('/api/students', cors(), async (req, res) => {
//   const newUser = {
//     firstname: req.body.firstname,
//     lastname: req.body.lastname,
//   };
//   console.log([newUser.firstname, newUser.lastname]);
//   const result = await db.query(
//     'INSERT INTO students(firstname, lastname) VALUES($1, $2) RETURNING *',
//     [newUser.firstname, newUser.lastname],
//   );
//   console.log(result.rows[0]);
//   res.json(result.rows[0]);
// });

// //A put request - Update a student
// app.put('/api/students/:studentId', cors(), async (req, res) =>{
//   console.log(req.params);
//   //This will be the id that I want to find in the DB - the student to be updated
//   const studentId = req.params.studentId
//   const updatedStudent = { id: req.body.id, firstname: req.body.firstname, lastname: req.body.lastname}
//   console.log("In the server from the url - the student id", studentId);
//   console.log("In the server, from the react - the student to be edited", updatedStudent);
//   // UPDATE students SET lastname = "something" WHERE id="16";
//   const query = `UPDATE students SET lastname=$1, firstname=$2 WHERE id=${studentId} RETURNING *`;
//   const values = [updatedStudent.lastname, updatedStudent.firstname];
//   try {
//     const updated = await db.query(query, values);
//     console.log(updated.rows[0]);
//     res.send(updated.rows[0]);

//   }catch(e){
//     console.log(e);
//     return res.status(400).json({e})
//   }
// })

// // delete request
// app.delete('/api/students/:studentId', cors(), async (req, res) =>{
//   const studentId = req.params.studentId;
//   //console.log("From the delete request-url", req.params);
//   await db.query('DELETE FROM students WHERE id=$1', [studentId]);
//   res.status(200).end();

// });

// create the POST request for a new user
// CREATE TABLE users (
// 	ID SERIAL PRIMARY KEY,
// 	lastname varchar(255),
// 	firstname varchar(255),
//     email varchar(255),
//     sub varchar(255));

//DO NOT TOUCH main route when you log in
app.post("/api/me", cors(), async (req, res) => {
  const newUser = {
    name: req.body.name,
    email: req.body.email,
    sub: req.body.sub,
    picture: req.body.picture,
  };
  console.log(newUser);

  const queryEmail = "SELECT * FROM users WHERE email=$1 LIMIT 1";
  const valuesEmail = [newUser.email];
  const resultsEmail = await db.query(queryEmail, valuesEmail);
  console.log(resultsEmail);
  if (resultsEmail.rows.length > 0) {
    console.log(`Thank you for comming back`);
  } else {
    const query =
      "INSERT INTO users( name, email, sub, picture) VALUES($1, $2, $3, $4) RETURNING *";
    const values = [newUser.name, newUser.email, newUser.sub, newUser.picture];
    const result = await db.query(query, values);
    console.log(result);
  }
});

// console.log that your server is up and running
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
