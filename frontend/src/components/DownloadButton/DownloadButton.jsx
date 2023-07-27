import { useState } from "react";
import Searchdialog from "../Searchdialog/Searchdialog";
import Searchbar from "../Searchbar/Searchbar";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

function DownloadButton({ originalImage, editedImage }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openSearchDialog = () => {
    setIsModalOpen(true);
  };

  const closeSearchDialog = () => {
    setIsModalOpen(false);
  };

  return (
    <ErrorBoundary>
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
    </ErrorBoundary>
  );
}

export default DownloadButton;
