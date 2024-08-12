import { MyInput } from "../../ui/MyInput/MyInput";
import { MyButton } from "../../ui/MyButton/MyButton";
import { useRef } from "react";
import styles from "./editForm.module.css";
import { MyTextArea } from "../../ui/MyTextArea/MyTextArea";

export const EditForm = ({ id, title, description, edit }) => {
  const updatedTitleRef = useRef("");
  const updatedDescriptionRef = useRef("");

  return (
    <form
      className={styles.editForm}
      onSubmit={(event) => {
        event.preventDefault();
        edit({ postId: id, updatedTitleRef, updatedDescriptionRef });
      }}
    >
      <MyInput
        style={{ width: "600px" }}
        defaultValue={title}
        ref={updatedTitleRef}
      />

      <MyTextArea defaultValue={description} ref={updatedDescriptionRef} />

      <MyButton>Редактировать</MyButton>
    </form>
  );
};
