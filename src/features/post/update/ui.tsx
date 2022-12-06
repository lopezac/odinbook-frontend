import { FormEvent, useEffect, useState } from "react";
import { Form, FormRow, Input, Button, TextArea } from "shared/ui";
import { getFormData } from "shared/lib/form-data";
import { useErrors } from "shared/hooks";
import type { PostType } from "shared/api";
import { formatDate } from "shared/lib/date";
import { PostModel } from "entities/post";

export const UpdatePost = ({ postId }: { postId: string }) => {
  const postModel = PostModel();
  const [post, setPost] = useState<PostType | null>(null);
  const [errors, setErrors] = useErrors();

  useEffect(() => {
    const fetchPostData = async () => {
      const data = await postModel.getPost(postId);
      setPost(data);
    };
    fetchPostData();
  }, [postId]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = getFormData(e.target as HTMLFormElement);
    const postData = { ...data, photos: [data.image] };
    const res = await postModel.updatePost(postId, postData);

    if ("errors" in res) return setErrors(res.errors);
    setErrors({});
    window.location.reload();
  };

  if (!post) return <p>Loading</p>;
  return (
    <Form onSubmit={handleSubmit}>
      <FormRow>
        <Input
          type="date"
          id="created_at"
          name="created_at"
          defaultValue={formatDate(post.created_at)}
          required
        />
      </FormRow>
      <FormRow>
        <TextArea
          id="text"
          name="text"
          defaultValue={post.text}
          required
        ></TextArea>
        {errors.text && <p>{errors.text}</p>}
      </FormRow>
      <div>
        <Button type="button">Photo</Button>
        <Input
          type="file"
          name="image"
          id="image"
          defaultValue={post.photos[0]}
          accept="image/png, image/jpeg"
        />
      </div>
      <Button type="submit">Update</Button>
    </Form>
  );
};
