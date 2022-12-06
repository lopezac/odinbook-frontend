import { FormEvent, useEffect } from "react";
import { getFormData } from "shared/lib/form-data";
import { Button, Form, FormRow, Input, TextArea } from "shared/ui";
import { useViewerModel, ViewerAvatar } from "entities/viewer";
import { PostModel } from "entities/post";

export const WritePost = () => {
  const postModel = PostModel();
  const viewerModel = useViewerModel();
  const viewer = viewerModel.useViewer();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = getFormData(e.target as HTMLFormElement);
    const reader = new FileReader();

    if (!data.image.size) {
      await postModel.createPost({ ...data, user: viewer!._id });
      window.location.reload();
    }

    reader.readAsDataURL(data.image);
    reader.addEventListener("load", async () => {
      const image = reader.result as string;

      await postModel.createPost({
        ...data,
        photos: [image],
        user: viewer!._id,
      });
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
