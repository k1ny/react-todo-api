import styles from "./myTextArea.module.css";
import React from "react";
export const MyTextArea = React.forwardRef((props, ref) => {
  return (
    <textarea ref={ref} {...props} className={styles.myTextArea}></textarea>
  );
});
