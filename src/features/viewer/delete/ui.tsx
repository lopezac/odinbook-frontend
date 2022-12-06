import { MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "shared/ui";
import { useViewerModel } from "entities/viewer";

export const DeleteUser = () => {
  const viewerModel = useViewerModel();
  const navigate = useNavigate();

  const handleClick = async (e: MouseEvent<HTMLButtonElement>) => {
    await viewerModel.deleteViewer();
    viewerModel.logoutViewer();

    navigate("/sign-in");
  };

  return (
    <Button type="button" onClick={handleClick}>
      Delete
    </Button>
  );
};
