//connection pool is a way to manage one or more db connections
//ideally used for high traffic app, you have more than one connection
//to use, to avoid overloading or

const { Pool } = require("pg");
const db = new Pool({
  connectionString: process.env.DB_URI,
});

module.exports = db;
