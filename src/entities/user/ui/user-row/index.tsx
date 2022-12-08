import { UserData } from "shared/api";
import { AvatarImg, Link } from "shared/ui";
import { StyledUserRow } from "./styled";

export const UserRow = ({ data }: { data: UserData }) => {
  return (
    <StyledUserRow>
      <Link to={`/users/${data._id}`}>
        <AvatarImg photoUrl={data.picture} size="medium" />
        <p>{data.firstName} {data.lastName}</p>
      </Link>
    </StyledUserRow>
  );
};
