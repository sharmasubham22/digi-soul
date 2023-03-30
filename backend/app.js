const express = require('express');
const mongoose = require('mongoose');
const app = express();

var cors = require('cors')
app.use(cors())

const route = require('./api/user_details/routes/routes');
const mongoURL = "mongodb+srv://digisoul:dbuser123@ds-cluster.pnswsy5.mongodb.net/web15"
mongoose.connect(mongoURL, {useNewUrlParser: true}).then(() => {
    console.log("MongoDB connected");
}).catch((err) => {
    console.log("Mongo Connection failed", err)
});

app.use(express.json());
app.use('', route);

module.exports = app