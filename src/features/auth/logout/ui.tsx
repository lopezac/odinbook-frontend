import { useNavigate } from "react-router-dom";
import { ViewerModel } from "entities/viewer";

export const Logout = () => {
  const navigate = useNavigate();
  const viewerModel = ViewerModel();

  return async () => {
    await viewerModel.logoutViewer();
    navigate("/sign-in");
  };
};
