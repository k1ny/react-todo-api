import { useState, useRef } from "react";
import "./App.css";
import { MyButton } from "./ui/MyButton/MyButton";
import { PostList } from "./components/PostList/PostList";
import { CreateForm } from "./components/CreateForm/CreateForm";
import Modal from "./components/Modal/Modal";
import { MyInput } from "./ui/MyInput/MyInput";
import { useMemo } from "react";

function App() {
  const [posts, setPosts] = useState([
    {
      id: "1",
      title: "JavaScript",
      description: "JS is the best lng of programming",
    },
  ]);
  const titleRef = useRef();
  const descriptionRef = useRef();

  const removePost = (postId) => {
    setPosts(posts.filter((post) => post.id !== postId));
  };

  const [isCreateFormOpen, setIsCreateFormOpen] = useState(false);

  const addNewPost = (event) => {
    event.preventDefault();

    const newPost = {
      id: Date.now(),
      title: titleRef.current.value,
      description: descriptionRef.current.value,
    };
    setPosts([...posts, newPost]);

    titleRef.current.value = "";
    descriptionRef.current.value = "";
    setIsCreateFormOpen(false);
  };

  const [searchQuery, setSearchQuery] = useState("");
  const searchedPosts = useMemo(() => {
    return posts.filter((post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [posts, searchQuery]);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "10px",
        }}
      >
        <MyButton
          onClick={(e) => {
            e.stopPropagation();
            setIsCreateFormOpen(true);
          }}
        >
          Создать новое задание
        </MyButton>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "6px" }}
      >
        <MyInput
          placeholder="Поиск по названию"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
      </div>
      <Modal
        handleClose={() => setIsCreateFormOpen(false)}
        isOpen={isCreateFormOpen}
      >
        <CreateForm
          addFunc={addNewPost}
          titleRef={titleRef}
          descriptionRef={descriptionRef}
        />
      </Modal>

      <PostList posts={searchedPosts} remove={removePost} />
    </div>
  );
}

export default App;
