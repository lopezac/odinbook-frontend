import { MouseEvent } from "react";
import { postApi } from "shared/api";
import { useMemoryStore } from "shared/hooks";
import { Button } from "shared/ui";

export const DeletePost = ({ postId }: { postId: string }) => {
  const [accessToken, setAccessToken] = useMemoryStore<string>("access-token");

  const handleClick = async (e: MouseEvent<HTMLButtonElement>) => {
    const res = await postApi.deletePost(postId, accessToken);
    console.log("button clicked", res);
    if ("success" in res) {
      window.location.reload();
    }
  };

  return (
    <Button type="button" onClick={handleClick}>
      Delete
    </Button>
  );
};
