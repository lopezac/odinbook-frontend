import { ChangeEvent, useContext } from "react";
import { AuthContext, ViewerModelType } from "entities/viewer";
import { IconDiv } from "./styles.module";

export const ChangeAvatar = () => {
  const viewerModel = useContext(AuthContext) as ViewerModelType;

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files![0];
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.addEventListener("load", async (e) => {
      const data = e.target?.result as string;

      const res = await viewerModel.updateViewer({ picture: data });
      window.location.reload();
    });
  };

  return (
    <IconDiv>
      <button>change</button>
      <input type="file" onChange={handleChange} />
    </IconDiv>
  );
};
