import UploadButton from "./components/UploadButton/UploadButton";
import "./App.css";

function App({ handleDataFromUploadButton }) {
  return (
    <div className="App">
      <h1>Upload and draw over an image!</h1>
      <h3>
        <UploadButton handleDataFromUploadButton={handleDataFromUploadButton} />
      </h3>
    </div>
  );
}

export default App;
