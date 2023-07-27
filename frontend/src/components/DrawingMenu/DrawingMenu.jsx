import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

function DrawingMenu({ setLineColor, setLineWidth, setIsEraserOn }) {
  return (
    <ErrorBoundary>
      <div className="Menu">
        <label>Brush Color </label>
        <input
          type="color"
          onChange={(e) => {
            setLineColor(e.target.value);
          }}
        />
        <label>Brush Width </label>
        <input
          type="range"
          min="3"
          max="20"
          onChange={(e) => {
            setLineWidth(e.target.value);
          }}
        />
      </div>
    </ErrorBoundary>
  );
}
export default DrawingMenu;
