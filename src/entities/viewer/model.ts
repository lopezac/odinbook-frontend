import { useEffect, useState } from "react";
import { userApi } from "shared/api";

export type UserData = {
  _id: string;
  facebookId?: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  birthday: Date;
  gender: string;
};

export const model = () => {
  const [viewer, setViewer] = useState<UserData | null>(null);

  useEffect(() => {
    if (!viewer) return;
    userApi.getUserData(viewer._id).then((data: UserData) => {
      setViewer(data);
    });
  }, [viewer]);

  const useViewer = () => {
    return viewer;
  };

  return { useViewer, setViewer };
};
