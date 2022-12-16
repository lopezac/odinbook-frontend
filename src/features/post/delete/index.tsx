import { BsTrash } from "react-icons/bs";
import { PostModel } from "entities/post";

export const DeletePost = ({ postId }: { postId: string }) => {
  const postModel = PostModel();

  const handleClick = async () => {
    const res = await postModel.deletePost(postId);
    if ("postId" in res) window.location.reload();
  };

  return <BsTrash onClick={handleClick} />;
};
