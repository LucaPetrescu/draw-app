import Canvas from "../Canvas/Canvas";

function PhotoViewer({ image }) {
  return (
    <>
      <div>{image ? <Canvas image={image} /> : <p>No image selected</p>}</div>
    </>
  );
}

export default PhotoViewer;
