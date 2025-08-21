require("dotenv").config({ path: "./database/dbConfig.env" });
const express = require("express");
const app = express();
const port = 3000;

console.log(process.env.DB_NAME);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log(`http://localhost:${port}`);
});

app.get("/hello", (req, res) => {
  console.log(req.url);
  res.send("Hello World!");
});

app.get("/board", (req, res) => {
  res.send({ title: "노드 api 서버 update!!!!" });
});
