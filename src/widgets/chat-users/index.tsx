import { useEffect, useState } from "react";
import { ChatUser } from "shared/api";
import { UserModel } from "entities/user";
import { ChatRow } from "entities/chat";
import { useViewerModel } from "entities/viewer";

export const ChatUsers = () => {
  const viewerModel = useViewerModel();
  const viewer = viewerModel.useViewer();
  const userModel = UserModel();
  const [chats, setChats] = useState<ChatUser[] | null>(null);

  useEffect(() => {
    if (!viewer) return;
    const fetchChatsData = async () => {
      const data = await userModel.getUserChats(viewer._id);
      setChats(data);
    };
    fetchChatsData();
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {chats && chats.map((chat) => <ChatRow key={chat._id} data={chat.user} chatId={chat._id} />)}
    </div>
  );
};
