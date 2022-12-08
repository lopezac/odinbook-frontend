import { useEffect, useState } from "react";
import { PostType } from "shared/api";
import { PostModel } from "entities/post";
import { PostItem } from "widgets/post";
import { useViewerModel } from "entities/viewer";

export const PostList = () => {
  const [posts, setPosts] = useState<PostType[] | null>(null);
  const postModel = PostModel();
  const viewerModel = useViewerModel();
  const viewer = viewerModel.useViewer();

  useEffect(() => {
    postModel.getUserPosts(viewer!._id).then((data) => {
      setPosts(data);
    });
  }, [viewer]);

  if (!posts || !posts.length) return <div>There are no posts</div>;
  if (!viewer) return <p>Laoding</p>;
  return (
    <div>
      {posts.map((post) => {
        return <PostItem key={post._id} post={post} user={viewer} />;
      })}
    </div>
  );
};
