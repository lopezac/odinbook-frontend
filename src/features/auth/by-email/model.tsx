import { FormEvent } from "react";
import { UserSignIn } from "shared/api";
import { getFormData } from "shared/lib/form-data";

export const handleSubmitForm = async (e: any, signInViewer: any) => {
  console.log("e siginInViewer", e, signInViewer);
  e.preventDefault();
  signInViewer.preventDefault();
  const data: UserSignIn = getFormData(e.target as HTMLFormElement);
  // const res = await signInViewer(data);
  // if (res.errors)
};
