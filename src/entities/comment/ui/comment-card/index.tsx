import { ReactElement, useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { CommentType, UserData } from "shared/api";
import { formatDate } from "shared/lib/date";
import {
  AvatarImg,
  BoldPara,
  DropdownMenu,
  Link,
  Para,
  SmallGrayPara,
} from "shared/ui";
import { UserModel } from "entities/user";
import { CardDiv, ActionsRow, GrayCard, MainCard } from "./styled";

type CommentCardProps = {
  comment: CommentType;
  userId: string;
  actions?: ReactElement[];
  before?: ReactElement[];
  after?: ReactElement[];
};

export const CommentCard = ({
  comment,
  userId,
  actions,
  before,
  after,
}: CommentCardProps) => {
  const userModel = UserModel();
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<UserData | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await userModel.getUser(userId);
      setUser(userData);
    };
    fetchUser();
  }, [userId]);

  if (!user) return <Para>Loading</Para>;
  return (
    <CardDiv>
      <Link to={`/users/${user._id}`}>
        <AvatarImg photoUrl={user.picture} size="small" />
      </Link>

      <MainCard>
        <GrayCard>
          <Link to={`/users/${user._id}`}>
            <BoldPara>
              {user.firstName} {user.lastName}
            </BoldPara>
          </Link>
          <Para>{comment.text}</Para>
        </GrayCard>
        <ActionsRow>
          <div>
            {before && before.map((action, idx) => <li key={idx}>{action}</li>)}
          </div>
          <SmallGrayPara>
            {formatDate(comment.created_at, "short")}
          </SmallGrayPara>
          <div>
            {after && after.map((action, idx) => <li key={idx}>{action}</li>)}
          </div>
        </ActionsRow>
      </MainCard>

      <div style={{ position: "relative" }}>
        {actions && <BsThreeDots onClick={() => setOpen(!open)} />}
        {actions && open && (
          <DropdownMenu>
            {actions &&
              actions.map((action, idx) => <li key={idx}>{action}</li>)}
          </DropdownMenu>
        )}
      </div>
    </CardDiv>
  );
};
