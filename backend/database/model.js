const mongoose = require("mongoose");

const DrawingsSchema = new mongoose.Schema(
  {
    imagesId: {
      type: Number,
      required: true,
      unique: true,
    },
    originalImage: {
      type: String,
    },
    editedImage: {
      type: String,
    },
  },
  { collection: "drawings" }
);

const Drawings = mongoose.model("Drawings", DrawingsSchema);

module.exports = Drawings;
