const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send({ message: "Hello World" });
});
app.get("/about", (req, res) => {
  res.send({ about: "hello world" });
});

app.listen(process.env.PORT || PORT, () => {
  console.log("server running on port = ", PORT);
});
