import { FormEvent, useEffect, useState } from "react";
import { Form, FormRow, Input, Button, TextArea } from "shared/ui";
import { getFormData } from "shared/lib/form-data";
import { useFileReader, useErrors } from "shared/hooks";
import { postApi } from "shared/api";

export const UpdatePost = ({ postId }: { postId: string }) => {
  const [post, setPost] = useState<PostType | null>(null);
  const [errors, setErrors] = useErrors();

  useEffect(() => {
    const fetchPostData = async () => {
      const data = await postApi.getPost(postId);
      if ("post" in data) setPost(data.post);
    };

    fetchPostData();
  }, [postId]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = getFormData(e.target as HTMLFormElement);
    const image = useFileReader(data.image);
    const postData = { ...data, photos: [image] };
    console.log("image gotten", image);

    const res = await postApi.updatePost(postId, postData, accessToken);
    console.log("res at handleSubmit", res);

    if ("errors" in res) return setErrors(res.errors);
    setErrors({});
    window.location.reload();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow>
        <Input
          type="date"
          id="created_at"
          name="created_at"
          defaultValue={post && post.created_at}
          required
        />
      </FormRow>

      <FormRow>
        <TextArea
          id="text"
          name="text"
          defaultValue={post && post.text}
          required
        ></TextArea>
      </FormRow>

      <div>
        <Button type="button">Photo</Button>
        <Input
          type="file"
          name="image"
          id="image"
          defaultValue={post && post.image}
          accept="image/png, image/jpeg"
        />
      </div>

      <Button type="submit">Update</Button>
    </Form>
  );
};
