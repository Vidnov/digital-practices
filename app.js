const express = require("express");
const app = express();
const port = 3003;

app.use(express.static("dist"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
