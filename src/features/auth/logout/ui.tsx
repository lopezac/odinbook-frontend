import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext, ViewerModelType } from "entities/viewer";

export const Logout = () => {
  const navigate = useNavigate();
  const viewerModel = useContext(AuthContext) as ViewerModelType;

  return () => {
    viewerModel.logoutViewer();
    navigate("/sign-in");
  };
};
