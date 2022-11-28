import { useContext } from "react";
import { Form } from "shared/ui/form";
import { Input } from "shared/ui/input";
import { Button } from "shared/ui/button";
import { Label } from "shared/ui/label";
import { FormRow } from "shared/ui/formRow";
import { SmallPara } from "shared/ui/para";
import { AuthContext } from "entities/viewer";

export const SignUp = () => {
  const ViewerModel = useContext(AuthContext);

  return (
    <Form onSuccess={}>
      <FormRow>
        <Label htmlFor="firstName">First name</Label>
        <Input type="text" name="firstName" id="firstName" required />

        <Label htmlFor="lastName">Last name</Label>
        <Input type="text" name="lastName" id="lastName" required />
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
          name="confirmPassword"
          id="confirmPassword"
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
        <Input type="radio" name="gender" id="male" value="male" />

        <Label htmlFor="female">Female</Label>
        <Input type="radio" name="gender" id="female" value="female" />

        <Label htmlFor="other">Other</Label>
        <Input type="radio" name="gender" id="other" value="other" />
      </FormRow>

      <Button>Sign Up</Button>
    </Form>
  );
};
