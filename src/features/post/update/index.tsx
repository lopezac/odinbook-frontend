import { FormEvent, useEffect, useState } from "react";
import {
  Form,
  FormRow,
  InputSquare,
  BlueButton,
  TextArea,
  GreenIconSpan,
  AddPhotoDiv,
} from "shared/ui";
import { getFormData } from "shared/lib/form-data";
import { useErrors } from "shared/hooks";
import type { PostType } from "shared/api";
import { formatDate } from "shared/lib/date";
import { PostModel } from "entities/post";
import { MdAddAPhoto } from "react-icons/md";

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
    const postData = { ...data };
    const res = await postModel.updatePost(postId, postData);

    if ("errors" in res) return setErrors(res.errors);
    setErrors({});
    window.location.reload();
  };

  if (!post) return <p>Loading</p>;
  return (
    <Form onSubmit={handleSubmit}>
      <FormRow>
        <InputSquare
          type="date"
          id="created_at"
          name="created_at"
          defaultValue={formatDate(post.created_at, "input")}
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

      <AddPhotoDiv>
        <GreenIconSpan>
          <MdAddAPhoto /> Photo
        </GreenIconSpan>
        <InputSquare
          type="file"
          name="image"
          id="image"
          accept="image/png, image/jpeg"
        />
      </AddPhotoDiv>

      <BlueButton type="submit">Update</BlueButton>
    </Form>
  );
};
