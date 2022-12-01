import { useContext, FormEvent } from "react";
import { Form, Input, Button, Label, FormRow, SmallPara } from "shared/ui";
import { getFormData } from "shared/lib/form-data";
import { useErrors } from "shared/hooks";
import { UserData, UserSignUp } from "shared/api";
import { AuthContext, ViewerModelType } from "entities/viewer";

export const UpdateUser = () => {
  const viewerModel = useContext(AuthContext) as ViewerModelType;
  const viewer = viewerModel.useViewer() as UserData;
  const [errors, setErrors] = useErrors();

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data: UserSignUp = getFormData(e.target as HTMLFormElement);

    const res = await viewerModel.updateViewer(data);
    console.log("res", res);
    if ("errors" in res) return setErrors(res.errors);

    setErrors({});
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <FormRow>
        <Label htmlFor="firstName">First name</Label>
        <Input
          type="text"
          name="firstName"
          id="firstName"
          minLength={2}
          maxLength={120}
          defaultValue={viewer && viewer.firstName}
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
          defaultValue={viewer && viewer.lastName}
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
          defaultValue={viewer && viewer.email}
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
          defaultValue={viewer && viewer.password}
          required
        />
        {errors.password && <p>{errors.password}</p>}
      </FormRow>

      <FormRow>
        <Label htmlFor="birthday">Birthday</Label>
        <Input
          type="date"
          name="birthday"
          id="birthday"
          error={!!errors.birthday}
          defaultValue={viewer && viewer.birthday.toLocaleDateString("en-us")}
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
          defaultChecked={viewer && viewer.gender === "male"}
        />

        <Label htmlFor="female">Female</Label>
        <Input
          type="radio"
          name="gender"
          id="female"
          value="female"
          defaultChecked={viewer && viewer.gender === "female"}
        />

        <Label htmlFor="other">Other</Label>
        <Input
          type="radio"
          name="gender"
          id="other"
          value="other"
          defaultChecked={viewer && viewer.gender === "other"}
        />
      </FormRow>

      <Button type="submit">Update</Button>
    </Form>
  );
};
