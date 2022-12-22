import { useEffect, useState } from "react";
import { HiThumbUp, HiThumbDown } from "react-icons/hi";
import { useViewerModel } from "entities/viewer";
import { LikeModel } from "entities/like";
import { IconSpan, BlueIconSpan } from "shared/ui";

export const LikeContent = ({ receiver }: { receiver: string }) => {
  const likeModel = LikeModel();
  const viewerModel = useViewerModel();
  const viewer = viewerModel.useViewer();
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    likeModel.likedByUser(viewer!._id, receiver).then((data) => setLiked(data));
  }, []);

  const createLike = async () => {
    const res = await likeModel.createLike({ user: viewer!._id, receiver });
    if ("like" in res) setLiked(true);
  };

  const removeLike = async () => {
    const res = await likeModel.deleteLike(receiver, viewer!._id);
    if ("success" in res) setLiked(false);
  };

  return liked ? (
    <BlueIconSpan onClick={removeLike}>
      <HiThumbDown /> Dislike
    </BlueIconSpan>
  ) : (
    <IconSpan onClick={createLike}>
      <HiThumbUp /> Like
    </IconSpan>
  );
};
