import { ChangeEvent } from "react";
import { FaCamera } from "react-icons/fa";
import { useViewerModel } from "entities/viewer";
import { IconDiv } from "./styles";
import { CircleIcon } from "shared/ui";

export const ChangeAvatar = () => {
  const viewerModel = useViewerModel();

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.currentTarget.files;
    if (!files) return;
    const reader = new FileReader();

    reader.readAsDataURL(files[0]);
    reader.addEventListener("load", async () => {
      const image = reader.result as string;
      console.log("image", image);

      await viewerModel.updateViewer({ picture: image });
      window.location.reload();
    });
  };

  return (
    <IconDiv>
      <CircleIcon>
        <FaCamera />
      </CircleIcon>
      <input
        style={{ cursor: "pointer" }}
        type="file"
        onChange={handleChange}
        accept="image/png, image/jpeg"
      />
    </IconDiv>
  );
};
