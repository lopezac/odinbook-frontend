import { FormEvent } from "react";
import {
  Form,
  InputSquare,
  GreenButton,
  Label,
  FormRow,
  FlexRow,
  RadioCard,
} from "shared/ui";
import { getFormData } from "shared/lib/form-data";
import { UserSignUp } from "shared/api";
import { useErrors } from "shared/hooks";
import { useViewerModel } from "entities/viewer";

export const AuthSignUp = () => {
  const viewerModel = useViewerModel();
  const [errors, setErrors] = useErrors();

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data: UserSignUp = getFormData(e.target as HTMLFormElement);

    const res = await viewerModel.signUpViewer(data);
    if ("errors" in res) return setErrors(res.errors);

    await viewerModel.signInViewer({
      email: data.email,
      password: data.password,
    });

    // const odinbookUser = await userModel.getUser()

    window.location.reload();
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <FlexRow>
        <FormRow>
          <Label htmlFor="firstName">First name</Label>
          <InputSquare
            type="text"
            name="firstName"
            id="firstName"
            minLength={2}
            maxLength={120}
            required
            error={!!errors.firstName}
          />
          {errors.firstName && <p>{errors.firstName}</p>}
        </FormRow>

        <FormRow>
          <Label htmlFor="lastName">Last name</Label>
          <InputSquare
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
      </FlexRow>

      <FormRow>
        <Label htmlFor="email">Email</Label>
        <InputSquare
          type="email"
          name="email"
          id="email"
          error={!!errors.email}
          required
        />
        {errors.email && <p>{errors.email}</p>}
      </FormRow>

      <FormRow>
        <Label htmlFor="birthday">Birthday</Label>
        <InputSquare
          type="date"
          name="birthday"
          id="birthday"
          error={!!errors.birthday}
          required
        />
        {errors.birthday && <p>{errors.birthday}</p>}
      </FormRow>

      <FormRow>
        <Label htmlFor="password">Password</Label>
        <InputSquare
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
        <InputSquare
          type="password"
          name="passwordConfirm"
          id="passwordConfirm"
          error={!!errors.passwordConfirm}
          required
        />
        {errors.passwordConfirm && <p>{errors.passwordConfirm}</p>}
      </FormRow>

      <FormRow>
        <Label>Gender</Label>

        <FlexRow>
          <RadioCard>
            <Label htmlFor="male">Male</Label>
            <InputSquare
              type="radio"
              name="gender"
              id="male"
              value="male"
              defaultChecked
            />
          </RadioCard>

          <RadioCard>
            <Label htmlFor="female">Female</Label>
            <InputSquare
              type="radio"
              name="gender"
              id="female"
              value="female"
            />
          </RadioCard>

          <RadioCard>
            <Label htmlFor="other">Other</Label>
            <InputSquare type="radio" name="gender" id="other" value="other" />
          </RadioCard>
        </FlexRow>
      </FormRow>

      <GreenButton type="submit">Sign Up</GreenButton>
    </Form>
  );
};
