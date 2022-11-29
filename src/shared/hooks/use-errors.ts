import { useState } from "react";

type ErrorsType = {
  value: string;
  msg: string;
  param: string;
  location: string;
};

const useErrors = () => {
  const [errors, setErrors] = useState<null | ErrorsType[]>(null);

  return [errors, setErrors] as const;
};

export default useErrors;
