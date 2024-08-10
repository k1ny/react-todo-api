import { PostItem } from "../PostItem/postItem";

export const PostList = ({ posts, remove }) => {
  return (
    <div>
      {posts.map((post) => (
        <PostItem
          key={post.id}
          id={post.id}
          title={post.title}
          description={post.description}
          remove={remove}
        />
      ))}
    </div>
  );
};
