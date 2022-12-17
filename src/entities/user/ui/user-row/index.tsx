import { ReactElement } from "react";
import { UserData } from "shared/api";
import { SquareAvatarImg, Link } from "shared/ui";
import { StyledUserRow, LargeBoldPara } from "./styled";

type UserRowProps = { data: UserData; actions?: ReactElement[] };

export const UserRow = ({ data, actions }: UserRowProps) => {
  return (
    <StyledUserRow>
      <Link to={`/users/${data._id}`}>
        <SquareAvatarImg photoUrl={data.picture} size="medium" />
        <LargeBoldPara>
          {data.firstName} {data.lastName}
        </LargeBoldPara>
      </Link>

      {actions && (
        <div>
          {actions.map((action, idx) => (
            <li key={idx}>{action}</li>
          ))}
        </div>
      )}
    </StyledUserRow>
  );
};
