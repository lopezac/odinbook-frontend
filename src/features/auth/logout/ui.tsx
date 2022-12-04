import { useNavigate } from "react-router-dom";
import { useViewerModel } from "entities/viewer";

export const Logout = () => {
  const navigate = useNavigate();
  const viewerModel = useViewerModel();

  return () => {
    viewerModel.logoutViewer();
    navigate("/sign-in");
  };
};
