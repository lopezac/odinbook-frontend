import type { UserData } from "shared/api/user";
// import { Row } from "shared/ui/formRow";

export const UserRow = ({ data, size }: { data: UserData; size: string }) => {
  return (
    <div>
      photo={data.photo} name={data.firstName} id={data._id} size={size}
    </div>
  );
};
