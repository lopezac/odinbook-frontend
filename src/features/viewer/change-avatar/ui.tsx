import { ChangeEvent } from "react";
import { useViewerModel } from "entities/viewer";
import { IconDiv } from "./styles.module";

export const ChangeAvatar = () => {
  const viewerModel = useViewerModel();

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.currentTarget.files;
    if (!files) return null;

    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.addEventListener("load", async (e) => {
      await viewerModel.updateViewer({ picture: e.target!.result as string });
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
