import { MouseEvent } from "react";
import { Button } from "shared/ui";
import { PostModel } from "entities/post";

export const DeletePost = ({ postId }: { postId: string }) => {
  const postModel = PostModel();

  const handleClick = async (e: MouseEvent<HTMLButtonElement>) => {
    await postModel.deletePost(postId);
    window.location.reload();
  };

  return (
    <Button type="button" onClick={handleClick}>
      Delete
    </Button>
  );
};
