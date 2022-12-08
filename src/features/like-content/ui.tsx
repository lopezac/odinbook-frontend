import { MouseEvent, useEffect, useState } from "react";
import { Button } from "shared/ui";
import { useViewerModel } from "entities/viewer";
import { LikeModel } from "entities/like";

export const LikeContent = ({ receiver }: { receiver: string }) => {
  const likeModel = LikeModel();
  const viewerModel = useViewerModel();
  const viewer = viewerModel.useViewer();
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    likeModel.likedByUser(viewer!._id, receiver).then((data) => setLiked(data));
  }, []);

  const createLike = async (e: MouseEvent<HTMLButtonElement>) => {
    const res = await likeModel.createLike({ user: viewer!._id, receiver });
    if ("like" in res) setLiked(true);
  };

  const removeLike = async (e: MouseEvent<HTMLButtonElement>) => {
    const res = await likeModel.deleteLike(receiver, viewer!._id);
    if ("success" in res) setLiked(false);
  };

  return (
    <>
      {liked ? (
        <Button type="button" onClick={removeLike}>
          DeLike
        </Button>
      ) : (
        <Button type="button" onClick={createLike}>
          Like
        </Button>
      )}
    </>
  );
};
