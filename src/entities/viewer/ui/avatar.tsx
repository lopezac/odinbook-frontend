import { ImgHTMLAttributes, useContext } from "react";
import { AvatarImg } from "shared/ui";
import { AuthContext, ViewerModelType } from "../index";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  size: string;
}

export const Avatar = ({ size }: AvatarProps) => {
  const viewerModel = useContext(AuthContext) as ViewerModelType;
  const viewer = viewerModel.useViewer();

  return <AvatarImg photoUrl={viewer!.picture} size={size} />;
};
