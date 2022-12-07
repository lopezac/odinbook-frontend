import { useMemoryStore } from "shared/hooks";
import { postApi, type UpdatePostType, type CreatePost } from "shared/api";

export const Model = () => {
  const [accessToken, setAccessToken] = useMemoryStore<string>("access-token");

  const createPost = async (postData: CreatePost) => {
    return await postApi.createPost(postData, accessToken);
  };

  const getPost = async (id: string) => {
    const data = await postApi.getPost(id);
    if ("post" in data) return data.post;
    return null;
  };

  const getUserPosts = async (id: string) => {
    const data = await postApi.getUserPosts(id);
    if ("posts" in data) return data.posts;
    return null;
  };

  const updatePost = async (id: string, postData: UpdatePostType) => {
    const data = await postApi.updatePost(id, postData, accessToken);
    console.log("data at model updatePOst", data);
    if ("post" in data) return data.post;
    if ("errors" in data) return data;
    return null;
  };

  const deletePost = async (id: string) => {
    return await postApi.deletePost(id, accessToken);
  };

  return { createPost, getPost, getUserPosts, updatePost, deletePost };
};
