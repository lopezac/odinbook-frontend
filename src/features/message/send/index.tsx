import { MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import { UserData } from "shared/api";
import { GrayRow, LargePara } from "shared/ui";
import { ChatModel } from "entities/chat";
import { useViewerModel } from "entities/viewer";
import { BsMessenger } from "react-icons/bs";

export const SendMessage = ({ user }: { user: UserData }) => {
  const navigate = useNavigate();
  const chatModel = ChatModel();
  const viewerModel = useViewerModel();
  const viewer = viewerModel.useViewer();

  const handleClick = async () => {
    if (!viewer) return;
    const chatFound = await chatModel.findChat([user._id, viewer._id]);

    if (!chatFound) {
      const chat = await chatModel.createChat([user._id, viewer._id]);
      return navigate(`/chats/${chat._id}`);
    }

    return navigate(`/chats/${chatFound._id}`);
  };

  return (
    <GrayRow onClick={handleClick}>
      <BsMessenger />
      <LargePara>Message</LargePara>
    </GrayRow>
  );
};
