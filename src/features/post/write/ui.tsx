import { FormEvent } from "react";
import { postApi } from "shared/api";
import { getFormData } from "shared/lib/form-data";
import { Button, Form, FormRow, Input, TextArea } from "shared/ui";
import { useMemoryStore } from "shared/hooks";
import { useViewerModel, ViewerAvatar } from "entities/viewer";

export const WritePost = () => {
  const [accessToken, setAccessToken] = useMemoryStore<string>("access-token");
  const viewerModel = useViewerModel();
  const viewer = viewerModel.useViewer();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = getFormData(e.target as HTMLFormElement);
    const file: File = data.image;

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.addEventListener("load", async (e) => {
      const image = e.target!.result as string;

      const postData = { ...data, photos: [image], user: viewer!._id };
      await postApi.createPost(postData, accessToken);

      window.location.reload();
    });
  };

  return (
    <div>
      <div>
        <ViewerAvatar size="medium" />
      </div>
      <div>
        <Form onSubmit={handleSubmit}>
          <FormRow>
            <TextArea
              id="text"
              name="text"
              placeholder="What's on your mind?"
              required
            ></TextArea>
          </FormRow>
          <div>
            <Button type="button">Photo</Button>
            <Input
              type="file"
              name="image"
              id="image"
              accept="image/png, image/jpeg"
            />
            <Button type="submit">Create</Button>
          </div>
        </Form>
      </div>
    </div>
  );
};
