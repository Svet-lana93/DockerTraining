const express = require("express");
const { connectDb } = require("./helpers/db");
const { port } = require("./configuration/");
const mongoose = require("mongoose");
const app = express();

const postSchema = new mongoose.Schema({
    name: String
});
const Post = mongoose.model('Post', postSchema);

const startServer = () => {
    app.listen(port, () => {
        console.log(`Started backand service on port: ${port}`)

        const silence = new Post({ name: "Silence" });
        silence.save( function (err, savedSilence) {
            if (err) return console.error(err);
            console.log("savedSilence", savedSilence);
        })
    });
};

app.get('/test', (req, res) => {
    res.send('Our backend is working')
});

app.get("/user", (req, res) => {
    res.json({
        id: "1234",
        email: "foo@gmail.com"
    });
});

connectDb()
    .on("error", console.log)
    .on("disconnected", connectDb)
    .once("open", startServer);