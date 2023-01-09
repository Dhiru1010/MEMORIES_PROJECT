const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require('cors');

const postRoutes = require('./routes/routesPost');

const app = express();


app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());


app.use('/posts', postRoutes)

// https://www.mongodb.com/cloud/atlas

const CONNECTION_URL = 'mongodb+srv://dhiru:12345@memories.d3yt1ib.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;


mongoose.set('strictQuery', false);
mongoose.connect(CONNECTION_URL, { useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`server is running on port ${PORT}`)))
    .catch((error) => console.log(error.message));