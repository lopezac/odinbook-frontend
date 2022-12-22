import { useContext } from "react";
import { useMemoryStore } from "shared/hooks";
import { commentApi, SocketContext, type CreateCommentType } from "shared/api";

export const Model = () => {
  const [accessToken, setAccessToken] = useMemoryStore<string>("access-token");
  const socket = useContext(SocketContext);

  const createComment = async (data: CreateCommentType) => {
    const res = await commentApi.createComment(data, accessToken);
    if ("comment" in res) {
      socket?.emit("comment:create", res.comment);
      return res.comment;
    }
    if ("errors" in res) return res;
  };

  const getPostComments = async (postId: string) => {
    const res = await commentApi.getPostComments(postId);
    if ("comments" in res) return res.comments;
  };

  const deleteComment = async (commentId: string) => {
    await commentApi.deleteComment(commentId, accessToken);
    socket?.emit("comment:delete", commentId);
  };

  return { createComment, getPostComments, deleteComment };
};
