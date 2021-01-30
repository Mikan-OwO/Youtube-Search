const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const PORT = process.env.PORT || 3000;

const app = express();

const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

app.use(bodyParser.text({ type: "text/*" }));
app.use(express.static("public", { extensions: ["html"] }));
app.use(cors(corsOptions));

app.use("/", express.static(path.join(__dirname, "page")));

app.listen(PORT);
