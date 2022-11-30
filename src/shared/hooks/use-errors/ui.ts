import { useState } from "react";
import { ErrorsType } from "./types";

export const useErrors = () => {
  const [errors, setErrors] = useState<{ [key: string]: string } | ErrorsType>(
    {}
  );

  return [errors, setErrors] as const;
};
