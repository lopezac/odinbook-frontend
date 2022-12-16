import { useEffect, useState } from "react";
import type { PostType, CommentType, UserData } from "shared/api";
import { DarkerWhiteCard } from "shared/ui";
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
    <DarkerWhiteCard>
      <PostSection
        user={userData}
        post={post}
        open={open}
        setOpen={setOpen}
        isViewerPost={viewer._id === userData._id}
      />
      {comments && open && (
        <CommentSection
          post={post}
          comments={comments}
          isViewerComment={viewer._id === userData._id}
        />
      )}
    </DarkerWhiteCard>
  );
};
