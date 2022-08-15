const express = require("express");
const app = express();
require("dotenv/config");

/*
 * Run app
 *
 */
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}. (http://localhost:${PORT}/)`);
});

/*
 * Connect to DB
 *
 */
const connectionHandlers = require("./utils/connectionHandlers");
const mysqlConnection = require("./utils/database");
mysqlConnection.connect((error) => {
  !error ? connectionHandlers.success() : connectionHandlers.error();
});
