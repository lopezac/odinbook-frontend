import { BsTrash } from "react-icons/bs";
import { PostModel } from "entities/post";

export const DeletePost = ({ postId }: { postId: string }) => {
  const postModel = PostModel();

  const handleClick = async () => {
    await postModel.deletePost(postId);
  };

  return <BsTrash onClick={handleClick} />;
};
