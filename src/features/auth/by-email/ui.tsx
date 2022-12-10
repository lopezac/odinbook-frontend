import { FormEvent } from "react";
import { Form, FormRow, Label, Input, Button } from "shared/ui";
import { UserSignIn } from "shared/api";
import { getFormData } from "shared/lib/form-data";
import { useErrors } from "shared/hooks";
import { useViewerModel } from "entities/viewer";

export const ByEmail = () => {
  const viewerModel = useViewerModel();
  const [errors, setErrors] = useErrors();

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data: UserSignIn = getFormData(e.target as HTMLFormElement);

    const res: any = await viewerModel.signInViewer(data);
    if ("status" in res && res.status === 401)
      return setErrors({ error: "Wrong email or password" });
    setErrors({});

    // window.location.reload();
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <FormRow>
        <Label htmlFor="email">Email</Label>
        <Input type="email" name="email" id="email" required />
      </FormRow>

      <FormRow>
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          name="password"
          id="password"
          minLength={7}
          required
        />
      </FormRow>
      {!!errors.error && <p>{errors.error}</p>}

      <Button type="submit">Sign In</Button>
    </Form>
  );
};
