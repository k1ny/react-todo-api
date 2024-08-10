import React from "react";
import styles from "./myInput.module.css";

export const MyInput = React.forwardRef((props, ref) => {
  return <input ref={ref} {...props} className={styles.myInput}></input>;
});
