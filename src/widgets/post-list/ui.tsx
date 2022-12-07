import { useEffect, useState } from "react";
import { PostType, UserData } from "shared/api";
import { PostModel } from "entities/post";
import { UserModel } from "entities/user";
import { PostItem } from "widgets/post-item";

export const PostList = ({ userId }: { userId: string }) => {
  const postModel = PostModel();
  const userModel = UserModel();
  const [posts, setPosts] = useState<PostType[] | null>(null);
  const [user, setUser] = useState<UserData | null>(null);

  useEffect(() => {
    postModel.getUserPosts(userId).then((data) => setPosts(data));
  }, [userId]);

  useEffect(() => {
    userModel.getUser(userId).then((data) => setUser(data));
  }, [userId]);

  if (!user) return <div>Loading</div>;
  if (!posts || !posts.length) return <div>There are no posts</div>;
  return (
    <div>
      {posts.map((post) => {
        return <PostItem key={post._id} post={post} user={user} />;
      })}
    </div>
  );
};
