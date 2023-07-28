const cors = require('cors')
const dotenv = require('dotenv')
const express = require("express");
const app = express();

dotenv.config()
const port = process.env.PORT

app.use(cors())
app.use(express.json())

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
app.listen(port, () => {
    console.log("Running on port .", port);
});


module.exports = app;
