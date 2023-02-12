// Requirement of modules

const express = require("express");
const fs = require("fs");
const path = require("path");
const hbs = require("hbs");
const app = express();
const port = process.env.PORT || 3000;

// Include the static web pages

const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates");
const partialsPath = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialsPath);
app.use(express.static(staticPath));

// routing

app.get("/", (req, res) => {
  res.render(path.join(__dirname, "../templates/views/index.hbs"));
});

app.get("/about", (req, res) => {
  res.render(path.join(__dirname, "../templates/views/about.hbs"));
});

app.get("/weather", (req, res) => {
  res.render(path.join(__dirname, "../templates/views/weather.hbs"));
});

app.get("*", (req, res) => {
  res.render(path.join(__dirname, "../templates/views/error.hbs"));
});

// Listening to the port

app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});
