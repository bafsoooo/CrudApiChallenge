const mongoose = require('mongoose');
const env = require("dotenv").config(); 

const connectString = process.env.MONGO_URI;
//connect the db to mongodb
const connectDB = (url) => {
    return mongoose.connect(connectString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}

module.exports = connectDB;