import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { H1, Layout } from "shared/ui";
import { MessageType, UserData } from "shared/api";
import { useRedirect, useViewerModel } from "entities/viewer";
import { ReceiverRow, ViewerRow } from "entities/message";
import { ChatModel } from "entities/chat";
import { WriteMessage } from "features/message";
import { ChatUsers } from "widgets/chat-users";
import { Footer } from "widgets/footer";
import { AuthHeader } from "widgets/header";
import { ChatMainDiv, MessagesDiv } from "./styles";

export const ChatPage = () => {
  useRedirect("unauthorized");

  const { chatId } = useParams();
  const chatModel = ChatModel();
  const viewerModel = useViewerModel();
  const viewer = viewerModel.useViewer();
  const [messages, setMessages] = useState<MessageType[] | null>(null);
  const [receiver, setReceiver] = useState<UserData | null>(null);

  useEffect(() => {
    const fetchMessages = async () => {
      const messagesData = await chatModel.getChatMessages(chatId as string);
      setMessages(messagesData);
    };
    fetchMessages();
    return;
  }, [chatId]);

  useEffect(() => {
    if (!viewer) return;
    const fetchReceiver = async () => {
      const receiverData = await chatModel.getReceiverUser(
        chatId as string,
        viewer._id
      );
      setReceiver(receiverData);
    };
    fetchReceiver();
  }, [viewer]);

  if (!receiver || !viewer) return <p>Loading</p>;
  return (
    <Layout.Main>
      <AuthHeader />

      <Layout.ChatWrapper>
        <ChatUsers />

        <ChatMainDiv>
          <H1>
            Chat with {receiver.firstName} {receiver.lastName}
          </H1>

          <MessagesDiv>
            {messages &&
              messages.map((message) => {
                return message.emitter === viewer._id ? (
                  <ViewerRow key={message._id} data={message} />
                ) : (
                  <ReceiverRow
                    key={message._id}
                    data={message}
                    user={receiver}
                  />
                );
              })}
          </MessagesDiv>

          {receiver && <WriteMessage receiver={receiver._id} />}
        </ChatMainDiv>
      </Layout.ChatWrapper>

      <Footer />
    </Layout.Main>
  );
};
