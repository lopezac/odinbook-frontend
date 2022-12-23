import { Dispatch, SetStateAction, useEffect } from "react";
import { Socket } from "socket.io-client";
import { PostType } from "./types";

type setPostsType = Dispatch<SetStateAction<PostType[] | null>>;

export const usePostSockets = (socket: Socket, setPosts: setPostsType) => {
  return useEffect(() => {
    function eventCreatePost(data: PostType) {
      setPosts((prevVal) => [...prevVal!, data]);
    }
    function eventDeletePost(id: string) {
      setPosts((prevVal) => prevVal!.filter((val) => val._id !== id));
    }

    socket.on("post:create", eventCreatePost);
    socket.on("post:delete", eventDeletePost);

    return () => {
      socket.off("post:create", eventCreatePost);
      socket.off("post:delete", eventDeletePost);
    };
  }, [socket]);
};
