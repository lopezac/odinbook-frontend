import { useNavigate, useParams } from "react-router-dom";
import { useViewerModel } from "entities/viewer";

export const useRedirectViewer = () => {
  const navigate = useNavigate();
  const viewerModel = useViewerModel();
  const viewer = viewerModel.useViewer();
  const { userId } = useParams();

  if (viewer!._id === userId) {
    navigate("/me");
  }
};
