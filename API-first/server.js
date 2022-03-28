const express = require('express');
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//CONNECT TO MGDB
mongoose.connect(process.env.MONGODB_URL, () =>{
    console.log("Connected to mongoDB");
    
})

let routes = require('./api/routes') //importing route
routes(app)



app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
})

const port = 3000;
app.listen(port, () => {
  console.log("Server is running on port", port);
});