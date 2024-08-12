import { useState, useRef } from "react";
import "./App.css";
import { MyButton } from "./ui/MyButton/MyButton";
import { PostList } from "./components/PostList/PostList";
import { CreateForm } from "./components/CreateForm/CreateForm";
import { Modal } from "./components/Modal/Modal";
import { MyInput } from "./ui/MyInput/MyInput";
import { useMemo } from "react";
import { MySelect } from "./ui/MySelect/MySelect";

function App() {
  const [posts, setPosts] = useState([
    {
      id: "1",
      title: "JavaScript",
      description: "JS is the best lng of programming",
    },
  ]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isCreateFormOpen, setIsCreateFormOpen] = useState(false);
  const [sortValue, setSortValue] = useState("");

  const titleRef = useRef();
  const descriptionRef = useRef();

  const sortedPosts = useMemo(() => {
    if (sortValue) {
      return [...posts].sort((a, b) =>
        a[sortValue].localeCompare(b[sortValue]),
      );
    }
    return posts;
  }, [posts, sortValue]);
  const searchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [sortedPosts, searchQuery]);

  const removePost = (postId) => {
    setPosts(posts.filter((post) => post.id !== postId));
  };

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
  const editPost = ({ postId, updatedTitleRef, updatedDescriptionRef }) => {
    setPosts(
      posts.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            title: updatedTitleRef.current.value,
            description: updatedDescriptionRef.current.value,
          };
        }
        return post;
      }),
    );
  };

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
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "6px",
          gap: "6px",
        }}
      >
        <div>
          <MyInput
            placeholder="Поиск по названию"
            style={{ width: "500px" }}
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
          />
        </div>
        <MySelect
          sortBy={(value) => setSortValue(value)}
          defaultValue={"Сортировка по"}
          options={[
            { value: "title", name: "по названию" },
            { value: "description", name: "по описанию" },
          ]}
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

      <PostList posts={searchedPosts} remove={removePost} edit={editPost} />
    </div>
  );
}

export default App;
