import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { getImages } from "../../utils/APIRoutes";
import convertFromBase64 from "../../utils/convertFromBase64";
import styles from "./Searchbar.module.css";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

function Searchbar() {
  const [value, setValue] = useState("");
  const [isBoxEmpty, setIsBoxEmpty] = useState(false);

  const handleDataRetrieval = async () => {
    try {
      if (value === "") {
        setIsBoxEmpty(false);
        toast.error("Please enter an id");
      } else {
        setIsBoxEmpty(true);
        const data = await axios.get(`${getImages}/${value}`);

        convertFromBase64(data.data[0].editedImage, "edited-image");
        convertFromBase64(data.data[0].originalImage, "original-image");
      }
    } catch (error) {
      toast.error("Entered id is invalid");
    }
  };

  return (
    <ErrorBoundary>
      <div className={styles.container}>
        <input
          type="text"
          className={styles.textbox}
          placeholder="Search drawings by id..."
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button className="btn btn-primary mt-2" onClick={handleDataRetrieval}>
          Search and download
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
      </div>
    </ErrorBoundary>
  );
}
export default Searchbar;
