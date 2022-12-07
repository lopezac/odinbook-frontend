import { MouseEvent } from "react";
import { Button } from "shared/ui";
import { CommentModel } from "entities/comment";

export const DeleteComment = ({ commentId }: { commentId: string }) => {
  const commentModel = CommentModel();

  const handleClick = async (e: MouseEvent<HTMLButtonElement>) => {
    const res = await commentModel.deleteComment(commentId);
    if ("commentId" in res) window.location.reload();
  };

  return (
    <Button onClick={handleClick} type="button">
      Delete
    </Button>
  );
};
