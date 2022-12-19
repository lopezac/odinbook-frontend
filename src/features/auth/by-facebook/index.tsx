import { GrFacebook } from "react-icons/gr";
import { BlueButton } from "shared/ui";
import { useViewerModel } from "entities/viewer";

export const AuthByFacebook = () => {
  const viewerModel = useViewerModel();

  const handleClick = async () => {
    await viewerModel.facebookSignUp(); 

    // window.location.reload();
  };

  return (
    <BlueButton onClick={handleClick}>
      <GrFacebook /> 
      Continue with Facebook
    </BlueButton>
  );
};
