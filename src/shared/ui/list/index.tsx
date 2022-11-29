import { FC } from "react";

type ErrorsListProps = { errors: { location: string; msg: string }[] };

export const ErrorsList: FC<ErrorsListProps> = ({ errors }) => {
  return (
    <ul>
      {errors.map((error, index) => {
        return <li key={index}>{error.msg}</li>;
      })}
    </ul>
  );
};
