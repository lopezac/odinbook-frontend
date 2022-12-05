import { useEffect, useState } from "react";
import { userApi } from "shared/api";

export const PhotosList = ({ userId }: { userId: string }) => {
  const [photos, setPhotos] = useState<null | string[]>(null);

  useEffect(() => {
    userApi.getUserPhotos(userId).then((data) => setPhotos(data));
  }, [userId]);

  if (!photos || !photos.length) return <p>There are no photos</p>;
  return (
    <ul>
      {photos.map((photo) => {
        return (
          <li>
            <img src={photo} alt="photo" />
          </li>
        );
      })}
    </ul>
  );
};
