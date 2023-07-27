import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import styles from "./Searchdialog.module.css";

function Searchdialog({ isOpen, onClose, children }) {
  return (
    <ErrorBoundary>
      <>
        {isOpen && (
          <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
              <button className={styles.closeButton} onClick={onClose}>
                &times;
              </button>
              {children}
            </div>
          </div>
        )}
      </>
    </ErrorBoundary>
  );
}

export default Searchdialog;
