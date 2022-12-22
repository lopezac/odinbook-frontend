import { BsTrash } from "react-icons/bs";
import { Para } from "shared/ui";
import { CommentModel } from "entities/comment";

export const DeleteComment = ({ commentId }: { commentId: string }) => {
  const commentModel = CommentModel();

  const handleClick = async () => {
    await commentModel.deleteComment(commentId);
  };

  return (
    <>
      <BsTrash onClick={handleClick} />
      <Para onClick={handleClick}>Delete comment</Para>
    </>
  );
};
