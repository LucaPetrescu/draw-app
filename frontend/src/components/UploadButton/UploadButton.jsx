import React, { useRef, useState } from "react";
import fileUploadImage from "../../assets/file-upload.png";
import styles from "./UploadButton.module.css";
import PhotoViewer from "../PhotoViewer/PhotoViewer";
import DownloadButton from "../DownloadButton/DownloadButton";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

function UploadButton() {
  const inputRef = useRef(null);
  const [image, setImage] = useState(null);

  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  return (
    <ErrorBoundary>
      <div className={styles.mainContainer}>
        <div className={styles.imageContainer}>
          {image ? (
            <PhotoViewer image={image} />
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
