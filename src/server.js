const express = require("express");
const routes = require("./routes.js");
const connection = require("./database");

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333, () => console.log("Server is running"));