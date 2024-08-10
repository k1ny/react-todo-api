import { useState } from "react";
import "./App.css";
import { MyButton } from "./ui/MyButton/MyButton";
import { MyInput } from "./ui/MyInput/MyInput";
import { PostList } from "./components/PostList/PostList";
import { useRef } from "react";

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

  const addNewPost = (newPost) => {
    setPosts(...posts, newPost);
  };
  const removePost = (postId) => {
    setPosts(posts.filter((post) => post.id !== postId));
  };

  return (
    <div>
      <form>
        <MyInput type="text" ref={titleRef} />
        <MyInput type="text" ref={descriptionRef} />
        <MyButton onClick={addNewPost}>Создать</MyButton>
      </form>
      <PostList posts={posts} remove={removePost} />
    </div>
  );
}

export default App;
