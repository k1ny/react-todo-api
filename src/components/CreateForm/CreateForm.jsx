import { MyInput } from "../../ui/MyInput/MyInput";
import { MyButton } from "../../ui/MyButton/MyButton";
import styles from "./createForm.module.css";
export const CreateForm = ({ addFunc, titleRef, descriptionRef }) => {
  return (
    <div className={styles.createFormContainer}>
      <form onSubmit={addFunc} className={styles.createForm}>
        <MyInput type="text" ref={titleRef} placeholder="enter the title" />
        <MyInput
          type="text"
          ref={descriptionRef}
          placeholder="enter the description"
        />
        <MyButton>Создать</MyButton>
      </form>
    </div>
  );
};
