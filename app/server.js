require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const upload = multer({ dest: "public/fotos" });

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
app.get("/", async (req, res) => {
    const imagenes = await ImageUploader.find();
    res.json(imagenes);
    //res.sendFile(process.cwd() + "/views/index.html");
});

app.get("/:id", async (req, res) => {
    const myImage = await ImageUploader.findById(req.params.id);
    return res.json(myImage);
});

app.post("/upload", upload.single("myImage"), async (req, res) => {
    fs.renameSync(
        req.file.path,
        req.file.path + "." + req.file.mimetype.split("/")[1]
    );
    console.log(req.file);
    res.send("Check Image");
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
