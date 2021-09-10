const express = require("express");
const app = express();
app.listen(3000, listenerCallback);

function listenerCallback() {
  console.log("App is running on Port: 3000");
}
