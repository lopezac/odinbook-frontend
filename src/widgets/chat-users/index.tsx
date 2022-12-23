import { useEffect, useState } from "react";
import { ChatType } from "shared/api";
import { UserModel } from "entities/user";
import { ChatRow } from "entities/chat";
import { useViewerModel } from "entities/viewer";
import { ChatsDiv, SidebarDiv, SmallTitle } from "./styles";

export const ChatUsers = () => {
  const viewer = useViewerModel().useViewer();
  const userModel = UserModel();
  const [chats, setChats] = useState<ChatType[] | null>(null);

  useEffect(() => {
    if (!viewer) return;
    const fetchChatsData = async () => {
      const data = await userModel.getUserChats(viewer._id);
      setChats(data);
    };
    fetchChatsData();
  }, []);

  return (
    <SidebarDiv>
      <SmallTitle>Chats</SmallTitle>
      <ChatsDiv>
        {chats &&
          chats.map((chat) => (
            <ChatRow key={chat._id} data={chat.user} chatId={chat._id} />
          ))}
      </ChatsDiv>
    </SidebarDiv>
  );
};
