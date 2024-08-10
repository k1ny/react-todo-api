import styles from "./myButton.module.css";
export const MyButton = ({ children, ...props }) => {
  return (
    <button className={styles.myButton} {...props}>
      {children}
    </button>
  );
};
