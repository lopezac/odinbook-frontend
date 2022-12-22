import { useContext } from "react";
import { useMemoryStore } from "shared/hooks";
import { postApi, UpdatePostType, CreatePost, SocketContext } from "shared/api";

export const Model = () => {
  const [accessToken, setAccessToken] = useMemoryStore<string>("access-token");
  const socket = useContext(SocketContext);

  const createPost = async (postData: CreatePost) => {
    const res = await postApi.createPost(postData, accessToken);
    socket?.emit("post:create", res);
  };

  const getPost = async (id: string) => {
    const data = await postApi.getPost(id);
    if ("post" in data) return data.post;
    return null;
  };

  const getPosts = async () => {
    const data = await postApi.getPosts();
    if ("posts" in data) return data.posts;
    return null;
  };

  const getUserPosts = async (id: string) => {
    const data = await postApi.getUserPosts(id);
    if ("posts" in data) return data.posts;
    return null;
  };

  const updatePost = async (id: string, postData: UpdatePostType) => {
    const data = await postApi.updatePost(id, postData, accessToken);
    if ("post" in data) return data.post;
    if ("errors" in data) return data;
    return null;
  };

  const deletePost = async (id: string) => {
    const res = await postApi.deletePost(id, accessToken);
    socket?.emit("post:delete", id);
    return res;
  };

  return {
    createPost,
    getPost,
    getPosts,
    getUserPosts,
    updatePost,
    deletePost,
  };
};
