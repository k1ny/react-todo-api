import { useState } from "react";
import { MyButton } from "../../ui/MyButton/MyButton";
import { EditForm } from "../EditForm/EditForm";
import { Modal } from "../Modal/Modal";
import styles from "./postItem.module.css";

export const PostItem = ({ id, number, title, description, remove, edit }) => {
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  return (
    <>
      <div className={styles.postItem}>
        <div>
          <strong>
            {number}. {title}
          </strong>
          <p>{description}</p>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <MyButton
            onClick={(e) => {
              e.stopPropagation();
              setIsEditFormOpen(true);
            }}
          >
            Редактировать
          </MyButton>
          <MyButton onClick={() => remove(id)}>Удалить</MyButton>
        </div>
      </div>

      <Modal
        handleClose={() => setIsEditFormOpen(false)}
        isOpen={isEditFormOpen}
      >
        <EditForm
          id={id}
          title={title}
          description={description}
          edit={(...args) => {
            edit(...args);
            setIsEditFormOpen(false);
          }}
        />
      </Modal>
    </>
  );
};
