import { MyButton } from "../../ui/MyButton/MyButton";
import styles from "./postItem.module.css";
export const PostItem = ({ id, title, description, remove }) => {
  return (
    <div className={styles.postItem}>
      <div>
        <strong>
          {id}. {title}
        </strong>
        <p>{description}</p>
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <MyButton>Редактировать</MyButton>
        <MyButton onClick={() => remove(id)}>Удалить</MyButton>
      </div>
    </div>
  );
};
