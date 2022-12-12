import { ImgHTMLAttributes } from "react";
import { AvatarImg } from "shared/ui";
import { useViewerModel } from "../hooks";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  size: string;
}

export const Avatar = ({ size }: AvatarProps) => {
  const viewerModel = useViewerModel();
  const viewer = viewerModel.useViewer();

  if (!viewer) return <></>;
  return <AvatarImg photoUrl={viewer.picture} size={size} />;
};
