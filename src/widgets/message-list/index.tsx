import { useContext, useEffect, useState } from "react";
import { Socket } from "socket.io-client";
import { MessageType, SocketContext, UserData } from "shared/api";
import { ChatModel } from "entities/chat";
import { ReceiverRow, ViewerRow } from "entities/message";
import { useViewerModel } from "entities/viewer";
import { MessagesDiv } from "./styles";

type MessageListProps = { chatId: string; receiver: UserData };

export const MessageList = ({ chatId, receiver }: MessageListProps) => {
  const socket = useContext(SocketContext) as Socket;
  const chatModel = ChatModel();
  const viewer = useViewerModel().useViewer();
  const [messages, setMessages] = useState<MessageType[] | null>(null);

  useEffect(() => {
    const fetchMessages = async () => {
      const messagesData = await chatModel.getChatMessages(chatId as string);
      setMessages(messagesData);
    };
    fetchMessages();
  }, [chatId]);

  useEffect(() => {
    const handleMessageCreate = (message: MessageType) => {
      setMessages((messages) => [...messages!, message]);
    };

    socket.on("message:create", handleMessageCreate);

    return () => {
      socket.off("message:create", handleMessageCreate);
    };
  }, [socket]);

  return (
    <MessagesDiv>
      {messages &&
        messages.map((message) => {
          return message.emitter === viewer!._id ? (
            <ViewerRow key={message._id} data={message} />
          ) : (
            <ReceiverRow key={message._id} data={message} user={receiver} />
          );
        })}
    </MessagesDiv>
  );
};
