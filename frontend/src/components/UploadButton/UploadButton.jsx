import React, { useRef, useState } from "react";
import fileUploadImage from "../../assets/file-upload.png";
import styles from "./UploadButton.module.css";
import PhotoViewer from "../PhotoViewer/PhotoViewer";
import DownloadButton from "../DownloadButton/DownloadButton";

function UploadButton() {
  const inputRef = useRef(null);
  const [image, setImage] = useState(null);

  const handleImageClick = () => {
    inputRef.current.click();
  };

  // console.log(image);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.imageContainer}>
        {image ? (
          <PhotoViewer image={image} />
        ) : (
          // <Canvas image={image} />
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
  );
}

export default UploadButton;
