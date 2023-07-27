import { useEffect, useState } from "react";
import styles from "./Searchbar.module.css";
import { toast, ToastContainer } from "react-toastify";

function Searchbar() {
  const [value, setValue] = useState("");
  const [isBoxEmpty, setIsBoxEmpty] = useState(false);

  const handleDataRetrieval = () => {
    if (value === "") {
      setIsBoxEmpty(false);
      toast.error("Please enter an id");
    } else {
      setIsBoxEmpty(true);
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