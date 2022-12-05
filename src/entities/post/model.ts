import { useMemoryStore } from "shared/hooks";
import { postApi } from "shared/api"

export const model = () => {
  const [accessToken, setAccessToken] = useMemoryStore<string>("access-token");

  const updatePost = async (id, data) => {
    return;
  };

  const deletePost = async (id) => {
    return;
  };

  const createPost = async (data) => {
    return;
  };
};
