// Add Express
const express = require("express");
// Initialize Express
const app = express();
// Create GET request
app.get("/", (req, res) => {
    res.send("Express on Vercel");
});

app.get("/api", (req, res) => {
    res.send("start api...");
});

app.get("/api/v0", (req, res) => {
    res.send("start api version zero ...");
});


// Initialize server
app.listen(5000, () => {
    console.log("Running on port 5000.");
});


module.exports = app;
