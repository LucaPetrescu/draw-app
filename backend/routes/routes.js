const express = require("express");
const router = express.Router();
const { postNewImages, getImages } = require("../controllers/controllers");
const Drawings = require("../database/model");

router.post("/postImages", async (req, res) => {
  const data = req.body;
  try {
    await postNewImages(data);
    res.status(200).send("Image successfuly created");
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Error:", error.message);
  }
});

router.get("/getImages/:imagesId", async (req, res) => {
  const imagesId = req.params.imagesId;
  try {
    const images = await getImages(imagesId);
    console.log(images);
    res.status(200).send(images);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
