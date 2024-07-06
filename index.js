const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const characters = require("./routes/characters");
require('dotenv').config();
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.use(express.json());

//routes
app.use("/characters", characters);

//middleware
app.use(notFound);
app.use(errorHandlerMiddleware);

const port = 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        console.log("you are connected to the database");
        app.listen(port, () => {
            console.log('server started');
        });
    } catch (error) {
        console.log(error);
    }
}

start();