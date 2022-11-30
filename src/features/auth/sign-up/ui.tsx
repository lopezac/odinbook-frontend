import { useContext, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, Label, FormRow, SmallPara } from "shared/ui";
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
    const data: UserSignUp = getFormData(e.target as HTMLFormElement);

    const res = await viewerModel.signUpViewer(data);
    if (res.errors) return setErrors(res.errors);

    setErrors({});
    navigate("/");
  };

  return (
    <>
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
            error={!!errors.firstName}
          />
          {errors.firstName && <p>{errors.firstName}</p>}

          <Label htmlFor="lastName">Last name</Label>
          <Input
            type="text"
            name="lastName"
            id="lastName"
            minLength={2}
            maxLength={120}
            required
            error={!!errors.lastName}
          />
          {errors.lastName && <p>{errors.lastName}</p>}
        </FormRow>

        <FormRow>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            error={!!errors.email}
            required
          />
          {errors.email && <p>{errors.email}</p>}
        </FormRow>

        <FormRow>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            error={!!errors.password}
            required
          />
          {errors.password && <p>{errors.password}</p>}
        </FormRow>

        <FormRow>
          <Label htmlFor="passwordConfirm">Confirm password</Label>
          <Input
            type="password"
            name="passwordConfirm"
            id="passwordConfirm"
            error={!!errors.passwordConfirm}
            required
          />
          {errors.passwordConfirm && <p>{errors.passwordConfirm}</p>}
        </FormRow>

        <FormRow>
          <Label htmlFor="birthday">Birthday</Label>
          <Input
            type="date"
            name="birthday"
            id="birthday"
            error={!!errors.birthday}
            required
          />
          {errors.birthday && <p>{errors.birthday}</p>}
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
