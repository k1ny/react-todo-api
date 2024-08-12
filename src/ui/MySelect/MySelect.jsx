import styles from "./mySelect.module.css";

export const MySelect = ({ options, defaultValue, sortBy }) => {
  return (
    <select
      className={styles.mySelect}
      onChange={(event) => sortBy(event.target.value)}
    >
      <option value="">{defaultValue}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};
