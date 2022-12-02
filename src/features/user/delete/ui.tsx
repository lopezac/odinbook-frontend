import { MouseEvent, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userApi, UserData } from "shared/api";
import { Button } from "shared/ui";
import { useMemoryStore } from "shared/hooks";
import { AuthContext, ViewerModelType } from "entities/viewer";

export const DeleteUser = () => {
  const [accessToken, setAccessToken] = useMemoryStore("access-token");
  const viewerModel = useContext(AuthContext) as ViewerModelType;
  const viewer = viewerModel.useViewer() as UserData;
  const navigate = useNavigate();

  const handleClick = async (e: MouseEvent<HTMLButtonElement>) => {
    await userApi.deleteUser(viewer._id, accessToken as string);
    viewerModel.logoutViewer();

    navigate("/sign-in");
  };

  return (
    <Button type="button" onClick={handleClick}>
      Delete
    </Button>
  );
};