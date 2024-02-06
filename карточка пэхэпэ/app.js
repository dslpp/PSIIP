const menu = require("./menu.js");

const express = require('express');
const app = express();
const port = 3000

const exercise2 = require("./2zadanie.js");
const exercise3 = require("./3zadanie.js");
const exercise4 = require("./4zadanie.js");
const exercise5 = require("./5zadanie.js");
const exercise6 = require("./6zadanie.js");


app.get('/', (req, res) => {
  res.send(menu);
});

app.use("/2", exercise2);
app.use("/3", exercise3);   
app.use("/4", exercise4);  
app.use("/5", exercise5);  
app.use("/6", exercise6); 
app.listen(port, () => console.log(`СЭРВЕР ДЖС СТАРДЕТ ${port}`));