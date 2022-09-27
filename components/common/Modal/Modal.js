import styles from "./sideModal.module.css";

const Modal = ({ openModal, setOpenModal, children, position = "right" }) => {
  return (
    <div className={`${styles.dialog} ${openModal ? styles["dialog--open"] : ""}`}>
      <div className={`${styles["dialog__body"]} ${position === "left" ? styles["dialog__body--left"] : ""} `}>
        <div className={styles["dialog__header"]}>
          <h3 className="fs-secondary-heading fw-semi-bold">Filters</h3>
          <button className={styles["dialog__close"]} onClick={() => setOpenModal(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div className={styles["dialog__content"]}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
