import { useEffect, useState } from "react";
import { HiThumbUp } from "react-icons/hi";
import { LikeModel } from "entities/like";
import { Para } from "shared/ui";
import { StyledLikeCard } from "./styles";

export const LikeQuantityCard = ({ receiverId }: { receiverId: string }) => {
  const likeModel = LikeModel();
  const [likeQuantity, setLikeQuantity] = useState<number | null>(null);

  useEffect(() => {
    likeModel
      .getReceiverLikes(receiverId)
      .then((data) => setLikeQuantity(data));
  }, [receiverId]);

  if (!likeQuantity) return null;
  return (
    <StyledLikeCard>
      <HiThumbUp />
      <Para>{likeQuantity}</Para>
    </StyledLikeCard>
  );
};
