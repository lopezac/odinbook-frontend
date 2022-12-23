import { useEffect, useState, useContext } from "react";
import { Socket } from "socket.io-client";
import { PostType, CommentType, UserData, SocketContext } from "shared/api";
import { DarkerWhiteCard } from "shared/ui";
import { CommentModel } from "entities/comment";
import { useViewerModel } from "entities/viewer";
import { UserModel } from "entities/user";
import { PostSection } from "./post-section";
import { CommentSection } from "./comment-section";

type PostItemProps = { post: PostType; user?: UserData };

export const PostItem = ({ post, user }: PostItemProps) => {
  const socket = useContext(SocketContext) as Socket;
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

  useEffect(() => {
    function eventCreateComment(data: CommentType) {
      setComments((prevVal) => [...prevVal!, data]);
    }

    function eventDeleteComment(id: string) {
      setComments((prevVal) => prevVal!.filter((val) => val._id !== id));
    }

    socket.on("comment:create", eventCreateComment);
    socket.on("comment:delete", eventDeleteComment);

    return () => {
      socket.off("comment:create", eventCreateComment);
      socket.off("comment:delete", eventDeleteComment);
    };
  });

  if (!userData || !viewer) return <></>;
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
