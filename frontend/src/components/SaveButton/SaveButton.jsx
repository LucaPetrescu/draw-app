import { useState } from "react";
import axios from "axios";
import { postImages } from "../../utils/APIRoutes";
import convertImageToBase64 from "../../utils/convertImageToBase64";
import generateRandomId from "../../utils/generateRandomId";

function SaveButton({ originalImage, editedImage }) {
  const [originalImageInBase64, setOriginalImageInBase64] = useState("");
  const convertImage = async () => {
    try {
      const originalImageInBase64 = await convertImageToBase64(originalImage);
      setOriginalImageInBase64(originalImageInBase64);
    } catch (error) {
      console.log(error.message);
    }
  };
  convertImage();

  const handleOnClick = async () => {
    if (!originalImageInBase64) {
      console.error("Original image not converted to base64 yet.");
      return;
    }
    const imagesId = generateRandomId();
    const { data } = await axios.post(postImages, {
      imagesId,
      editedImage,
      originalImageInBase64,
    });
  };
  return (
    <>
      <button className="btn btn-success" onClick={handleOnClick}>
        Save
      </button>
    </>
  );
}
export default SaveButton;
