import Canvas from "../Canvas/Canvas";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

function PhotoViewer({ image }) {
  return (
    <ErrorBoundary>
      <>
        <div>{image ? <Canvas image={image} /> : <p>No image selected</p>}</div>
      </>
    </ErrorBoundary>
  );
}

export default PhotoViewer;
