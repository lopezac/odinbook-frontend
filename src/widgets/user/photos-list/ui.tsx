import { useContext, useEffect, useState } from "react";
import { postApi } from "shared/api";
import { AuthContext, ViewerModelType } from "entities/viewer";

export const PhotosList = ({ limit }: { limit: number }) => {
  const viewerModel = useContext(AuthContext) as ViewerModelType;
  const viewer = viewerModel.useViewer();
  const [photos, setPhotos] = useState<null | string[]>(null);

  useEffect(() => {
    async function getPhotos() {
      const foundPhotos = await postApi.getPhotos(viewer!._id);
      setPhotos(foundPhotos);
    }
    getPhotos();
  });

  if (!photos) return <p>There are no photos</p>;
  return (
    <ul>
      {photos.map((photo) => {
        return <li>photo</li>;
      })}
    </ul>
  );
};
