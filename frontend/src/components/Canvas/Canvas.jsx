import { useState, useRef, useEffect } from "react";
import DrawingMenu from "../DrawingMenu/DrawingMenu";
import SaveButton from "../SaveButton/SaveButton";
import styles from "./Canvas.module.css";

function Canvas({ image }) {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [lineWidth, setLineWidth] = useState(5);
  const [lineColor, setLineColor] = useState("black");
  const [isEraserOn, setIsEraserOn] = useState(false);

  useEffect(() => {
    if (!image) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const img = new Image();
    img.onload = () => {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
    img.src = URL.createObjectURL(image);
  }, [image]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = lineWidth;
    //---------------------
  }, [lineColor, lineWidth]);

  const startDrawing = (event) => {
    if (event.button === 2) {
      setIsDrawing(true);
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      const { offsetX, offsetY } = event.nativeEvent;
      ctx.beginPath();
      ctx.moveTo(offsetX, offsetY);
    }
  };
  const draw = (event) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const { offsetX, offsetY } = event.nativeEvent;
    ctx.lineTo(offsetX, offsetY);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  // const handleDownload = () => {
  //   const canvas = canvasRef.current;
  //   const link = document.createElement("a");

  //   const canvasImage = canvas.toDataURL("image/png");

  //   link.href = canvasImage;

  //   link.click();
  // };
  function editedPhoto() {
    return canvasRef.current?.toDataURL("img/png");
  }
  console.log(lineColor);

  return (
    <div className={styles.canvasAlignment}>
      <DrawingMenu
        setLineColor={setLineColor}
        setLineWidth={setLineWidth}
        isEraserOn={isEraserOn}
        setIsEraserOn={setIsEraserOn}
      />
      <canvas
        ref={canvasRef}
        width={500} // Adjust the canvas width as needed
        height={500} // Adjust the canvas height as needed
        style={{ border: "1px solid #000", background: "transparent" }}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
      />

      <SaveButton originalImage={image} editedImage={editedPhoto()} />
    </div>
  );
}

export default Canvas;
