export const formDataToObject = (formData: FormData) => {
  const finalObject: any = {};

  for (const key of formData.keys()) {
    const value = formData.get(key) as string;
    finalObject[key] = value;
  }

  return finalObject;
};

export const getFormData = (form: HTMLFormElement) => {
  const formData = new FormData(form);
  return formDataToObject(formData);
};
