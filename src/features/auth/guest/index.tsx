import { GrayButton } from "shared/ui";
import { useViewerModel } from "entities/viewer";

export const AuthGuestSign = () => {
  const viewerModel = useViewerModel();

  const handleClick = async () => {
    const guestData = viewerModel.generateGuestData();

    await viewerModel.signUpViewer(guestData);
    await viewerModel.signInViewer({
      email: guestData.email,
      password: guestData.password,
    });

    window.location.reload();
  };

  return <GrayButton onClick={handleClick}>Guest Sign In</GrayButton>;
};
