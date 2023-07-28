import React, { useRef, useState } from "react";
import fileUploadImage from "../../assets/file-upload.png";
import styles from "./UploadButton.module.css";
import PhotoViewer from "../PhotoViewer/PhotoViewer";
import DownloadButton from "../DownloadButton/DownloadButton";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

function UploadButton() {
  const inputRef = useRef(null);
  const [image, setImage] = useState(null);
  const [imageKey, setImageKey] = useState(0);

  const handleImageClick = (event) => {
    inputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      setImageKey((prevKey) => prevKey + 1);
    }
  };

  return (
    <ErrorBoundary>
      <div className={styles.mainContainer}>
        <div className={styles.imageContainer}>
          {image ? (
            <PhotoViewer key={imageKey} image={image} />
          ) : (
            <img
              src={fileUploadImage}
              alt="Upload"
              className={styles.uploadImageIcon}
            />
          )}
        </div>
        <input
          type="file"
          ref={inputRef}
          onChange={handleImageChange}
          style={{ display: "none" }}
        />
        <button
          className={`btn btn-primary mt-2 ${styles.customButton}`}
          onClick={handleImageClick}
        >
          Upload Image
        </button>
        <DownloadButton />
      </div>
    </ErrorBoundary>
  );
}

export default UploadButton;
