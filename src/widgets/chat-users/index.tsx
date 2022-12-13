import { useEffect, useState } from "react";
import { UserData } from "shared/api";
import { UserModel } from "entities/user";
import { ChatRow } from "entities/chat";
import { useViewerModel } from "entities/viewer";

export const ChatUsers = () => {
  const viewerModel = useViewerModel();
  const viewer = viewerModel.useViewer();
  const userModel = UserModel();
  const [users, setUsers] = useState<UserData[] | null>(null);

  useEffect(() => {
    if (!viewer) return;
    const fetchUsersData = async () => {
      const data = await userModel.getUserChats(viewer._id);
      setUsers(data);
    };
    fetchUsersData();
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {users && users.map((user) => <ChatRow key={user._id} data={user} />)}
    </div>
  );
};
