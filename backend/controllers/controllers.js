const Drawings = require("../database/model");

async function postNewImages(data) {
  try {
    if (data.editedImage === "undefined") {
      data.editedImage = "";
    }
    const imagesId = data.imagesId;
    const originalImage = data.originalImageInBase64;
    const editedImage = data.editedImage;
    const newDrawing = new Drawings({ imagesId, originalImage, editedImage });
    await newDrawing.save();
  } catch (error) {
    console.log(error.message);
  }
}

async function getImages(imagesId) {
  try {
    const images = await Drawings.find({ imagesId });
    if (images.length === 0) {
      throw new Error("No documents with that id found");
    }

    return images;
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = { postNewImages, getImages };
