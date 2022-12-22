import { FormEvent } from "react";
import {
  Form,
  InputSquare,
  BlueButton,
  Label,
  FormRow,
  FlexRow,
  RadioCard,
} from "shared/ui";
import { getFormData } from "shared/lib/form-data";
import { formatDate } from "shared/lib/date";
import { useErrors } from "shared/hooks";
import { UserUpdate } from "shared/api";
import { useViewerModel } from "entities/viewer";

export const UpdateUser = () => {
  const viewerModel = useViewerModel();
  const viewer = viewerModel.useViewer();
  const [errors, setErrors] = useErrors();

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data: UserUpdate = getFormData(e.target as HTMLFormElement);

    const res = await viewerModel.updateViewer(data);

    if ("errors" in res) return setErrors(res.errors);
    setErrors({});
    window.location.reload();
  };

  if (!viewer) return <p>Loading</p>;
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
            defaultValue={viewer.firstName}
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
            defaultValue={viewer.lastName}
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
          defaultValue={viewer.email}
          required
          error={!!errors.email}
        />
        {errors.email && <p>{errors.email}</p>}
      </FormRow>

      <FormRow>
        <Label htmlFor="birthday">Birthday</Label>
        <InputSquare
          type="date"
          name="birthday"
          id="birthday"
          defaultValue={formatDate(viewer.birthday, "input")}
          required
          error={!!errors.birthday}
        />
        {errors.birthday && <p>{errors.birthday}</p>}
      </FormRow>

      <FormRow>
        <Label htmlFor="password">Password</Label>
        <InputSquare
          type="password"
          name="password"
          id="password"
          required
          error={!!errors.password}
        />
        {errors.password && <p>{errors.password}</p>}
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
              defaultChecked={viewer.gender === "male"}
            />
          </RadioCard>

          <RadioCard>
            <Label htmlFor="female">Female</Label>
            <InputSquare
              type="radio"
              name="gender"
              id="female"
              value="female"
              defaultChecked={viewer.gender === "female"}
            />
          </RadioCard>

          <RadioCard>
            <Label htmlFor="other">Other</Label>
            <InputSquare
              type="radio"
              name="gender"
              id="other"
              value="other"
              defaultChecked={viewer.gender === "other"}
            />
          </RadioCard>
        </FlexRow>
      </FormRow>

      <BlueButton type="submit">Update</BlueButton>
    </Form>
  );
};
