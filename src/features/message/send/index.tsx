import { MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import { UserData } from "shared/api";
import { Button } from "shared/ui";
import { ChatModel } from "entities/chat";
import { useViewerModel } from "entities/viewer";

export const SendMessage = ({ user }: { user: UserData }) => {
  const navigate = useNavigate();
  const chatModel = ChatModel();
  const viewerModel = useViewerModel();
  const viewer = viewerModel.useViewer();

  const handleClick = async (e: MouseEvent<HTMLButtonElement>) => {
    if (!viewer) return;

    const chatFound = await chatModel.findChat([user._id, viewer._id]);
    console.log("chatFound", chatFound);

    if (!chatFound) {
      const chat = await chatModel.createChat([user._id, viewer._id]);
      console.log("chat", chat);
      return navigate(`/chats/${chat._id}`);
    }

    return navigate(`/chats/${chatFound._id}`);
  };

  return <Button onClick={handleClick}>Message</Button>;
};
