import { useEffect, useState } from "react";
import { postApi, PostType, userApi, UserData } from "shared/api";
import { PostCard } from "entities/post";
import { DeletePost } from "features/post";

export const PostList = ({ userId }: { userId: string }) => {
  const [posts, setPosts] = useState<PostType[] | null>(null);
  const [user, setUser] = useState<UserData | null>(null);

  useEffect(() => {
    let active = true;

    const fetchPostsData = async () => {
      const postsData = await postApi.getUserPosts(userId);
      if ("posts" in postsData && active) setPosts(postsData.posts);
    };

    const fetchUserData = async () => {
      const userData = await userApi.getUser(userId);
      if ("user" in userData && active) setUser(userData.user);
    };

    fetchPostsData();
    fetchUserData();
    return () => {
      active = false;
    };
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
            actions={[<DeletePost postId={post._id} />]}
          />
        );
      })}
    </div>
  );
};
