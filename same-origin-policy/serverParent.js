const express = require("express");
const app = express();
const path = require('path');
app.use(express.urlencoded({
  extended: true
}));

//app.use(express.static(path.join(__dirname,'b')));

app.get("/parentsite", (req, res) => {
    res.sendFile(path.join(__dirname+'/parentsite.html'));
});

app.get("/child", (req, res) => {
    res.sendFile(path.join(__dirname+'/child.html'));
});

app.listen(4005, () => {
  console.log("listening on port 4005...");
});