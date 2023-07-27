const express = require("express");
const router = express.Router();
const Drawings = require("../database/model");

router.post("/postImages", async (req, res) => {
  const data = req.body;
  try {
    if (data.editedImage === "undefined") {
      data.editedImage = "";
    }
    const imagesId = data.imagesId;
    const originalImage = data.originalImageInBase64;
    const editedImage = data.editedImage;
    const newDrawing = new Drawings({ imagesId, originalImage, editedImage });
    await newDrawing.save();
    console.log("Entry created succesfully");
    res.status(200).send("Image successfuly created");
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Error:", error.message);
  }
});

router.get("/getImages", async (req, res) => {});

module.exports = router;
