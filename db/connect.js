const mongoose = require('mongoose');
const env = require("dotenv").config(); 

const connectString = process.env.MONGO_URI;

const connectDB = (url) => {
    return mongoose.connect(connectString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true
    });
}


// const connect = () => {
//     return mongoose.connect(connectString, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         useCreateIndex: true
//     });
// };

module.exports = connectDB;