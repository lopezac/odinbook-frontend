import { useEffect, useState } from "react";
import { SessionStorage, userApi } from "shared/api";

export type UserDataType = {
  _id: string;
  facebookId?: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  birthday: Date;
  gender: string;
};

export const Model = () => {
  const [viewer, setViewer] = useState<UserDataType | null>(null);

  useEffect(() => {
    if (!viewer) return;
    userApi.getUserData(viewer._id).then((data: UserDataType) => {
      setViewer(data);
    });
  }, [viewer]);

  const useViewer = () => {
    return viewer;
  };

  return { useViewer, setViewer };
};
