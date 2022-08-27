const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const Router = require("./routes/routes");

require("dotenv/config");

/*
 * Express
 *
 */
const app = express(); // init express
app.use(express.json()); // use express json

// ---------------------------------
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
// ---------------------------------
// app.use(bodyParser.urlencoded());
// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   })
// );
// ---------------------------------
app.use(cors()); // use cors

/*
 * Run app
 *
 */
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}. (http://localhost:${PORT}/)`);
});

app.use(bodyParser.json());

/*
 * Use router
 *
 */
app.use(Router);

/*
 * Connect to DB
 *
 */
const connectionHandlers = require("./utils/connectionHandlers");
const mysqlConnection = require("./utils/database");
mysqlConnection.connect((error) => {
  !error ? connectionHandlers.success() : connectionHandlers.error();
});

mysqlConnection.end();
