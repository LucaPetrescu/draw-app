import { useState } from "react";
import Searchdialog from "../Searchdialog/Searchdialog";
import Searchbar from "../Searchbar/Searchbar";

function DownloadButton({ originalImage, editedImage }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openSearchDialog = () => {
    setIsModalOpen(true);
  };

  const closeSearchDialog = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div>
        <button className="btn btn-primary mt-2 " onClick={openSearchDialog}>
          Search and download
        </button>
        <Searchdialog isOpen={isModalOpen} onClose={closeSearchDialog}>
          <Searchbar />
        </Searchdialog>
      </div>
    </>
  );
}

export default DownloadButton;
