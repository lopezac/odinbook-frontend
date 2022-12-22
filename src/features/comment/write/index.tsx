import { FormEvent } from "react";
import { useErrors } from "shared/hooks";
import { getFormData } from "shared/lib/form-data";
import { Button, Form, FormRow, Input } from "shared/ui";
import { CommentModel } from "entities/comment";
import { useViewerModel } from "entities/viewer";

export const WriteComment = ({ postId }: { postId: string }) => {
  const viewer = useViewerModel().useViewer();
  const commentModel = CommentModel();
  const [errors, setErrors] = useErrors();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = getFormData(e.currentTarget as HTMLFormElement);
    const createData = { ...data, user: viewer!._id, post: postId };

    const res = await commentModel.createComment(createData);

    if ("errors" in res) return setErrors(res.errors);
    window.location.reload();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow>
        <Input
          type="text"
          name="text"
          id="text"
          required
          minLength={1}
          maxLength={1000}
          placeholder="Write a comment... (press enter to send)"
        />
        {errors.text && <p>{errors.text}</p>}
      </FormRow>

      <Button type="submit" style={{ display: "none" }}>
        Write
      </Button>
    </Form>
  );
};
