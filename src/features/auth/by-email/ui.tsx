import { useContext } from "react";
import { Form, FormRow, Label, Input, Button } from "shared/ui";
import { AuthContext } from "entities/viewer";
import { handleSubmitForm } from "./model";

export const ByEmail = () => {
  const viewerModel = useContext(AuthContext);

  return (
    <Form onSubmit={handleSubmitForm.bind(this, viewerModel)}>
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

      <Button type="submit">Sign In</Button>
    </Form>
  );
};
