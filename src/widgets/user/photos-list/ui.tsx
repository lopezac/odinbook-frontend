import { useEffect, useState } from "react";
import { userApi } from "shared/api";


export const PhotosList = ({ userId }: { userId: string }) => {
  const [photos, setPhotos] = useState<null | string[]>(null);

  useEffect(() => {
    async function getPhotos() {
      const foundPhotos = await userApi.getUserPhotos(userId);
      setPhotos(foundPhotos);
    }
    getPhotos();
  });

  if (!photos || !photos.length) return <p>There are no photos</p>;
  return (
    <ul>
      {photos.map((photo) => {
        return (
          <li>
            <img src={photo} />
          </li>
        )
      })}
    </ul>
  );
};
