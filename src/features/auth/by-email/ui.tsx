import { useContext, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Form, FormRow, Label, Input, Button } from "shared/ui";
import { UserSignIn } from "shared/api";
import { getFormData } from "shared/lib/form-data";
import { useErrors } from "shared/hooks";
import { AuthContext, ViewerModelType } from "entities/viewer";

export const ByEmail = () => {
  const navigate = useNavigate();
  const viewerModel = useContext(AuthContext) as ViewerModelType;
  const [errors, setErrors] = useErrors();

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data: UserSignIn = getFormData(e.target as HTMLFormElement);

    const res = await viewerModel.signInViewer(data);
    console.log("res", res);
    if ("errors" in res) return setErrors(res.errors);
    setErrors({});
    navigate("/");
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <FormRow>
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          name="email"
          id="email"
          required
          error={!!errors.email}
        />
        {errors.email && <p>{errors.email}</p>}
      </FormRow>

      <FormRow>
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          name="password"
          id="password"
          minLength={7}
          required
          error={!!errors.password}
        />
        {errors.password && <p>{errors.password}</p>}
      </FormRow>

      <Button type="submit">Sign In</Button>
    </Form>
  );
};
