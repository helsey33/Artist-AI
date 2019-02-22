const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("build"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

app.listen(5000, _ => console.log("Server is up on 5000"));
