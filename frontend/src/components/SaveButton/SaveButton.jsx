import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { postImages } from "../../utils/APIRoutes";
import convertImageToBase64 from "../../utils/convertImageToBase64";
import generateRandomId from "../../utils/generateRandomId";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

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

    toast.success(data);
  };
  return (
    <ErrorBoundary>
      <>
        <button className="btn btn-success" onClick={handleOnClick}>
          Save
        </button>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </>
    </ErrorBoundary>
  );
}
export default SaveButton;
