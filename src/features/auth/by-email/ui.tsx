import { Form, FormRow, Label, Input } from "shared/ui";

export const ByEmail = () => {
  return (
    <Form>
      <FormRow>
        <Label htmlFor="email">Email</Label>
        <Input type="email" name="email" id="email" required />
      </FormRow>

      <FormRow>
        <Label htmlFor="password">Password</Label>
        <Input type="password" name="password" id="password" required />
      </FormRow>
    </Form>
  );
};
