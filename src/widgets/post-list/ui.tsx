import { useEffect, useState } from "react";
import { PostType, UserData } from "shared/api";
import { Button, Link } from "shared/ui";
import { PostModel, PostCard } from "entities/post";
import { UserModel } from "entities/user";
import { DeletePost } from "features/post";

export const PostList = ({ userId }: { userId: string }) => {
  const postModel = PostModel();
  const userModel = UserModel();
  const [posts, setPosts] = useState<PostType[] | null>(null);
  const [user, setUser] = useState<UserData | null>(null);

  useEffect(() => {
    const fetchPostsData = async () => {
      const postsData = await postModel.getUserPosts(userId);
      setPosts(postsData);
    };
    fetchPostsData();
  }, [userId]);

  useEffect(() => {
    const fetchUserData = async () => {
      const userData = await userModel.getUser(userId);
      setUser(userData);
    };
    fetchUserData();
  }, [userId]);

  if (!user) return <div>Loading</div>;
  if (!posts || !posts.length) return <div>There are no posts</div>;
  return (
    <div>
      {posts.map((post) => {
        return (
          <PostCard
            key={post._id}
            post={post}
            user={user}
            actions={[
              <Link to={`/posts/${post._id}/update`}>
                <Button>Update</Button>
              </Link>,
              <DeletePost postId={post._id} />
            ]}
          />
        );
      })}
    </div>
  );
};
