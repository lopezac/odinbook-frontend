import { useEffect, useState } from "react";
import { LikeModel } from "entities/like";

export const LikeQuantityCard = ({ receiverId }: { receiverId: string }) => {
  const likeModel = LikeModel();
  const [likeQuantity, setLikeQuantity] = useState<number | null>(null);

  useEffect(() => {
    likeModel.getReceiverLikes(receiverId).then((data) => setLikeQuantity(data));
  }, []);

  if (!likeQuantity) return null;
  return (
    <p>Likes {likeQuantity}</p>
  );
};
