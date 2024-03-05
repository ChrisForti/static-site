const express = require("express");
const path = require("path");
const app = express();

app.get("/api", (req, res) => {
  res.json("HTTP request recieved");
});

app.get("/", (req, res) => {
  res.send("<h1>Year 2024</h1><a href='/info'>Info page</a>");
});

app.get("/info", (req, res) => {
  res.send("<h1>Infopage</h1><a href='/'>Home page</a>");
});

app.use(express.static("docs"));

app.use("/", express.static(path.join(__dirname, "/api")));

app.use("/website", express.static(path.join(__dirname, "docs")));

app.use((req, res) => {
  res.status(404);
  res.send("<h1>Error 404: Resource not found</h1>");
});

app.listen(3000, () => {
  console.log("App is listening at http://localhost:${port}");
});
