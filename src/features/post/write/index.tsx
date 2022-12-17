import { FormEvent } from "react";
import { MdAddAPhoto } from "react-icons/md";
import { getFormData } from "shared/lib/form-data";
import {
  Button,
  Form,
  FormRow,
  Input,
  TextArea,
  GreenIconSpan,
  BlueButton,
} from "shared/ui";
import { useViewerModel } from "entities/viewer";
import { PostModel } from "entities/post";
import { AddPhotoDiv } from "./styles";

export const WritePost = () => {
  const postModel = PostModel();
  const viewerModel = useViewerModel();
  const viewer = viewerModel.useViewer();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = getFormData(e.target as HTMLFormElement);
    const postData = { ...data, user: viewer!._id };
    const reader = new FileReader();

    if (data.image.size) {
      reader.readAsDataURL(data.image);
      reader.addEventListener("load", async () => {
        postData.photos = [reader.result as string];
        await postModel.createPost(postData);
      });
    } else {
      await postModel.createPost(postData);
    }

    window.location.reload();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow>
        <TextArea
          id="text"
          name="text"
          placeholder="What's on your mind?"
          required
        ></TextArea>
      </FormRow>

      <AddPhotoDiv>
        <GreenIconSpan>
          <MdAddAPhoto /> Photo
        </GreenIconSpan>
        <Input
          type="file"
          name="image"
          id="image"
          accept="image/png, image/jpeg"
        />
      </AddPhotoDiv>
      <BlueButton type="submit">Write</BlueButton>
    </Form>
  );
};
