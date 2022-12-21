import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { H1, Layout } from "shared/ui";
import { UserData } from "shared/api";
import { useRedirect, useViewerModel } from "entities/viewer";
import { ChatModel } from "entities/chat";
import { WriteMessage } from "features/message";
import { ChatUsers } from "widgets/chat-users";
import { Footer } from "widgets/footer";
import { AuthHeader } from "widgets/header";
import { MessageList } from "widgets/message-list";
import { ChatMainDiv } from "./styles";

export const ChatPage = () => {
  useRedirect("unauthorized");

  const { chatId } = useParams();
  const chatModel = ChatModel();
  const viewer = useViewerModel().useViewer();
  const [receiver, setReceiver] = useState<UserData | null>(null);

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

          <MessageList chatId={chatId!} receiver={receiver} />

          {receiver && <WriteMessage receiver={receiver._id} />}
        </ChatMainDiv>
      </Layout.ChatWrapper>

      <Footer />
    </Layout.Main>
  );
};
