const express = require("express");
const res = require("express/lib/response");

app = express();

app.get("/", (req, res) => {
    res.send("My App is up and running");
})

app.listen("/", (req, res) => {
    console.log(`Server is running at port ${PORT}`);
})