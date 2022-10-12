const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

// middleware
app.use(express.json());
app.use(cors());

// routes



// route calling
app.get("/", (req, res) => {
    res.send("Route Is Working")
})


module.exports = app;