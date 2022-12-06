import { ChangeEvent } from "react";
import { useViewerModel } from "entities/viewer";
import { IconDiv } from "./styles.module";

export const ChangeAvatar = () => {
  const viewerModel = useViewerModel();

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.currentTarget.files;
    if (!files) return;
    const reader = new FileReader();

    reader.readAsDataURL(files[0]);
    reader.addEventListener("load", async () => {
      const image = reader.result as string;

      await viewerModel.updateViewer({ picture: image });
      window.location.reload();
    });
  };

  return (
    <IconDiv>
      <button>change</button>
      <input
        type="file"
        onChange={handleChange}
        accept="image/png, image/jpeg"
      />
    </IconDiv>
  );
};
