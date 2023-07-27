import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { getImages } from "../../utils/APIRoutes";
import convertFromBase64 from "../../utils/convertFromBase64";
import styles from "./Searchbar.module.css";

function Searchbar() {
  const [value, setValue] = useState("");
  const [isBoxEmpty, setIsBoxEmpty] = useState(false);

  const handleDataRetrieval = async () => {
    if (value === "") {
      setIsBoxEmpty(false);
      toast.error("Please enter an id");
    } else {
      setIsBoxEmpty(true);
      const data = await axios.get(`${getImages}/${value}`);
      console.log(data.data[0].originalImage);
      console.log(data.data);

      convertFromBase64(data.data[0].editedImage, "edited-image");
      convertFromBase64(data.data[0].originalImage, "original-image");
    }
  };

  return (
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
  );
}
export default Searchbar;
