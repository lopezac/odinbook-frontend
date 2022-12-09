import { useEffect, useState } from "react";
import type { PostType, CommentType, UserData } from "shared/api";
import { CommentModel } from "entities/comment";
import { useViewerModel } from "entities/viewer";
import { UserModel } from "entities/user";
import { PostSection } from "./post-section";
import { CommentSection } from "./comment-section";

type PostItemProps = { post: PostType; user?: UserData };

export const PostItem = ({ post, user }: PostItemProps) => {
  const commentModel = CommentModel();
  const userModel = UserModel();
  const viewerModel = useViewerModel();
  const viewer = viewerModel.useViewer();
  const [comments, setComments] = useState<null | CommentType[]>(null);
  const [open, setOpen] = useState(false);
  const [userData, setUserData] = useState(user);

  useEffect(() => {
    const fetchPostComments = async () => {
      const commentsData = await commentModel.getPostComments(post._id);
      setComments(commentsData);
    };
    fetchPostComments();
  }, [post]);

  useEffect(() => {
    if (userData) return;
    const fetchUser = async () => {
      const data = await userModel.getUser(post.user);
      if (data) setUserData(data);
    };
    fetchUser();
  }, []);

  if (!userData || !viewer) return <p>User is loading</p>;
  return (
    <>
      <PostSection
        user={userData}
        post={post}
        open={open}
        setOpen={setOpen}
        isViewerPost={viewer._id === userData._id}
      />
      {comments && (
        <CommentSection
          user={userData}
          post={post}
          comments={comments}
          open={open}
          isViewerComment={viewer._id === userData._id}
        />
      )}
    </>
  );
};
