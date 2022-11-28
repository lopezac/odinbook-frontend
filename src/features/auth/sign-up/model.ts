import { FormEvent } from "react";

export const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const form = e.target as HTMLFormElement;
  const formData = new FormData(form);
  console.log("formData", formData);
};
