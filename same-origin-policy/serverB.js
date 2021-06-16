const express = require("express");
const app = express();
const path = require('path');
app.use(express.urlencoded({
  extended: true
}));

app.use(express.static(path.join(__dirname,'b')));

app.get("/siteb", (req, res) => {
    res.sendFile(path.join(__dirname+'/siteb.html'));
});

app.get("/siteb/getdata", (req, res) => {
  res.sendFile(path.join(__dirname+'/getdata.js'));
});

app.listen(4003, () => {
  console.log("listening on port 4003...");
});
