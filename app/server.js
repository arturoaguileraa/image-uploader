require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const multer = require("multer");

const app = express();
const ImageUploader = require("./images");

// Global variables
const port = process.env.PORT || 8080;

// Middlewares
app.use(cors());

app.use(express.json());
app.use(express.urlencoded());

app.use("/public", express.static(`${process.cwd()}/public`));

// Endpoints
app.get("/", function (req, res) {
    res.send("Hola!");
    //res.sendFile(process.cwd() + "/views/index.html");
});

app.get("/:id", async (req, res) => {
    const myImage = await ImageUploader.findById(req.params.id);
    res.json(myImage);
});

app.post("/", async (req, res) => {
    const { image } = req.body;
    const newImg = new ImageUploader({
        image,
    });
    await newImg.save();
});

// Database connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Server initialization
app.listen(port, function () {
    console.log(`Listening on port ${port}`);
});
