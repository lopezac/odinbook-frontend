import { useContext, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import {
  Form,
  Input,
  Button,
  Label,
  FormRow,
  SmallPara,
  ErrorsList,
} from "shared/ui";
import { getFormData } from "shared/lib/form-data";
import { UserSignUp } from "shared/api";
import { useErrors } from "shared/hooks";
import { AuthContext } from "entities/viewer";

export const SignUp = () => {
  const viewerModel = useContext(AuthContext);
  const [errors, setErrors] = useErrors();
  const navigate = useNavigate();

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = getFormData(e.target as HTMLFormElement) as UserSignUp;

    const res = await viewerModel.signUpViewer(data);
    if (res.errors) return setErrors(res.errors);

    setErrors(null);
    navigate("/");
  };

  return (
    <>
      {errors && <ErrorsList errors={errors} />}

      <Form onSubmit={handleFormSubmit}>
        <FormRow>
          <Label htmlFor="firstName">First name</Label>
          <Input
            type="text"
            name="firstName"
            id="firstName"
            minLength={2}
            maxLength={120}
            required
          />

          <Label htmlFor="lastName">Last name</Label>
          <Input
            type="text"
            name="lastName"
            id="lastName"
            minLength={2}
            maxLength={120}
            required
          />
        </FormRow>

        <FormRow>
          <Label htmlFor="email">Email</Label>
          <Input type="email" name="email" id="email" required />
        </FormRow>

        <FormRow>
          <Label htmlFor="password">Password</Label>
          <Input type="password" name="password" id="password" required />
        </FormRow>

        <FormRow>
          <Label htmlFor="confirmPassword">Confirm password</Label>
          <Input
            type="password"
            name="passwordConfirm"
            id="passwordConfirm"
            required
          />
        </FormRow>

        <FormRow>
          <Label htmlFor="birthday">Birthday</Label>
          <Input type="date" name="birthday" id="birthday" required />
        </FormRow>

        <FormRow>
          <SmallPara>Gender</SmallPara>

          <Label htmlFor="male">Male</Label>
          <Input
            type="radio"
            name="gender"
            id="male"
            value="male"
            defaultChecked
          />

          <Label htmlFor="female">Female</Label>
          <Input type="radio" name="gender" id="female" value="female" />

          <Label htmlFor="other">Other</Label>
          <Input type="radio" name="gender" id="other" value="other" />
        </FormRow>

        <Button type="submit">Sign Up</Button>
      </Form>
    </>
  );
};
