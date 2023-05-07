const connectToMongo = require("./db");
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");

const formRoute = require("./routes/form");

const app = express();

connectToMongo();

app.use(cors({ origin: true, credentials: true }));

app.use(bodyParser.json());

app.get("/", (req, res) => res.send("Hello world!"));

app.use("/api", formRoute);

const port = process.env.PORT || 7000;

app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);
