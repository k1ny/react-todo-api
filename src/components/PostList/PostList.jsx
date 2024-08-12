import { PostItem } from "../PostItem/postItem";

export const PostList = ({ posts, remove, edit }) => {
  return (
    <div>
      {posts.map((post, index) => (
        <PostItem
          key={post.id}
          id={post.id}
          number={index + 1}
          title={post.title}
          description={post.description}
          remove={remove}
          edit={edit}
        />
      ))}
    </div>
  );
};
