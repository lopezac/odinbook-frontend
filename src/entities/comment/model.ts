import { useMemoryStore } from "shared/hooks";
import { commentApi, type CreateCommentType } from "shared/api";

export const Model = () => {
  const [accessToken, setAccessToken] = useMemoryStore<string>("access-token");

  const createComment = async (data: CreateCommentType) => {
    const res = await commentApi.createComment(data, accessToken);
    if ("comment" in res) return res.comment;
    if ("errors" in res) return res;
  };

  const getPostComments = async (postId: string) => {
    const res = await commentApi.getPostComments(postId);
    if ("comments" in res) return res.comments;
  };

  const deleteComment = async (commentId: string) => {
    return await commentApi.deleteComment(commentId, accessToken);
  };

  return { createComment, getPostComments, deleteComment };
};
