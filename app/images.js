const mongoose = require("mongoose");
const { Schema } = mongoose;

const ImagesSchema = new Schema({
    image: {
        type: Buffer,
        required: true,
    },
});

module.exports = mongoose.model("ImageUploader", ImagesSchema);
