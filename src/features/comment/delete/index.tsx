import { BsTrash } from "react-icons/bs";
import { CommentModel } from "entities/comment";

export const DeleteComment = ({ commentId }: { commentId: string }) => {
  const commentModel = CommentModel();

  const handleClick = async () => {
    const res = await commentModel.deleteComment(commentId);
    if ("commentId" in res) window.location.reload();
  };

  return <BsTrash onClick={handleClick} />;
};
