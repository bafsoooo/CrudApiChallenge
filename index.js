const express = require("express");
const connectDB = require("./db/connect");
const characters = require("./routes/characters");
const app = express();


app.use("./characters", characters);

const port = 5000;

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