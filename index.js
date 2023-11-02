const express = require("express");
// const mysql = require("mysql");

const app = express();
const port = 2805;
app.use(express.json());

const router = require("./routes/index");
app.use(router);

app.listen(port, () => console.log(`Server running on port ${port}`));
