import { useEffect, useState } from "react";

export const PostList = ({ user }: { user: string }) => {
  const [posts, setPosts] = useState<PostType[] | null>(null);

  useEffect(() => {});

  if (!posts || !posts.length) return <div>There are no posts</div>;
  return (
    <div>
      {posts.map((post) => {
        return <PostCard data={post} />;
      })}
    </div>
  );
};
