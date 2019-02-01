const express = require("express");

const app = express();

var PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send({ hello: "there" });
});

app.listen(PORT, () => {
  console.log(`app launched on port ${PORT}`);
});
