import styles from "./Searchdialog.module.css";

function Searchdialog({ isOpen, onClose, children }) {
  return (
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
  );
}

export default Searchdialog;
