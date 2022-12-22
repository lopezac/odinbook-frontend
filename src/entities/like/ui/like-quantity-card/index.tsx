import { useEffect, useState, useContext } from "react";
import { HiThumbUp } from "react-icons/hi";
import { Socket } from "socket.io-client";
import { Para } from "shared/ui";
import { SocketContext, Like } from "shared/api";
import { LikeModel } from "entities/like";
import { StyledLikeCard } from "./styles";

export const LikeQuantityCard = ({ receiverId }: { receiverId: string }) => {
  const socket = useContext(SocketContext) as Socket;
  const likeModel = LikeModel();
  const [likeQuantity, setLikeQuantity] = useState<number | null>(null);

  useEffect(() => {
    likeModel
      .getReceiverLikes(receiverId)
      .then((data) => setLikeQuantity(data));
  }, [receiverId]);

  useEffect(() => {
    const handleAddLike = (like: Like) => {
      if (like.receiver === receiverId) {
        setLikeQuantity((prevVal) => prevVal! + 1);
      }
    };

    const handleRemoveLike = (id: string) => {
      if (id === receiverId) {
        setLikeQuantity((prevVal) => prevVal! - 1);
      }
    };

    socket.on("like:create", handleAddLike);
    socket.on("like:delete", handleRemoveLike);

    return () => {
      socket.off("like:create", handleAddLike);
      socket.off("like:delete", handleRemoveLike);
    };
  }, [socket]);

  if (!likeQuantity) return null;
  return (
    <StyledLikeCard>
      <HiThumbUp />
      <Para>{likeQuantity}</Para>
    </StyledLikeCard>
  );
};
