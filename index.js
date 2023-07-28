const cors = require('cors')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const express = require("express");
const app = express();

dotenv.config()
const port = process.env.PORT

app.use(cors())
app.use(express.json())
// mongoose
mongoose.connect(`${process.env.MONGO_URL}`)
    .then(th => {
        console.log('db connected')
    }).catch(error => console.log('db error:', error.message))

// schema
const schema = new mongoose.Schema({
    email: { type: String }
})
const Model$ = mongoose.model('User', schema)

// routes
app.get("/", (req, res) => {
    res.send("Express on Vercel");
});

app.get("/api", (req, res) => {
    res.send("start api...");
});

app.get("/api/v0", (req, res) => {
    res.send("start api version zero ...");
});

//
/*
app.post('/api/v0/user', async (req, res) => {
    const user = await (await Model$.create(req.body)).save()
    req.send(user)
})

app.get('/api/v0/user/all', async (req, res) => {
    const users = await Model$.find()
    req.send(users)
})*/

// Initialize server
app.listen(port, () => {
    console.log("Running on port .", port);
});


module.exports = app;
