const express = require("express");
const app = express();
const path = require('path');
app.use(express.urlencoded({
  extended: true
}));

app.use(express.static(path.join(__dirname,'a')));

app.get("/sitea", (req, res) => {
    res.sendFile(path.join(__dirname+'/sitea.html'));
});

app.get("/sitea/post", (req, res) => {
  res.sendFile(path.join(__dirname+'/post.html'));
});

app.get("/sitea/jsonp", (req, res) => {
  res.sendFile(path.join(__dirname+'/jsonp.html'));
});

app.listen(4001, () => {
  console.log("listening on port 4001...");
});