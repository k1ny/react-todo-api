import { useState } from "react";
import "./App.css";
import { MyButton } from "./ui/MyButton/MyButton";
import { MyInput } from "./ui/MyInput/MyInput";
import { PostList } from "./components/PostList/PostList";
import { useRef } from "react";
import { CreateForm } from "./components/CreateForm/CreateForm";

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

  const addNewPost = (event) => {
    event.preventDefault();
    const id = Date.now();
    const titleValue = titleRef.current.value;
    const descriptionValue = descriptionRef.current.value;
    const newPost = {
      id: id,
      title: titleValue,
      description: descriptionValue,
    };
    setPosts([...posts, newPost]);
    titleRef.current.value = "";
    descriptionRef.current.value = "";
  };

  const removePost = (postId) => {
    setPosts(posts.filter((post) => post.id !== postId));
  };
  return (
    <div>
      <CreateForm
        addFunc={addNewPost}
        titleRef={titleRef}
        descriptionRef={descriptionRef}
      />
      <PostList posts={posts} remove={removePost} />
    </div>
  );
}

export default App;
