import { ChangeEvent } from "react";
import { IconDiv } from "./styles.module";

export const ChangeAvatar = () => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("e.currentTarget.files", e.currentTarget.files);
  };

  return (
    <IconDiv>
      <button>change</button>
      <input type="file" onChange={handleChange} />
    </IconDiv>
  );
};
