import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";
import styles from "./modal.module.css";

const portal = document.getElementById("pop-up");

export const Modal = ({ children, isOpen, handleClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
          handleClose();
        }
      };

      document.addEventListener("click", handleClickOutside);

      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }
  }, [isOpen, handleClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className={styles.modalBackground}>
      <div className={styles.modal} ref={modalRef}>
        {children}
      </div>
    </div>,
    portal,
  );
};
