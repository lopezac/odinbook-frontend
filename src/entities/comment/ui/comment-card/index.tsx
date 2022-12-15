import { ReactElement, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { CommentType, UserData } from "shared/api";
import { formatDate } from "shared/lib/date";
import { AvatarImg, DropdownMenu } from "shared/ui";

type CommentCardProps = {
  comment: CommentType;
  user: UserData;
  actions?: ReactElement[];
  after?: ReactElement[];
};

export const CommentCard = ({
  comment,
  user,
  actions,
  after,
}: CommentCardProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <AvatarImg photoUrl={user.picture} size="small" />

      <div>
        <div>
          <p>
            {user.firstName} {user.lastName}
          </p>
          <p>{comment.text}</p>
        </div>
        <div>
          <div>
            {after && after.map((action, idx) => <li key={idx}>{action}</li>)}
          </div>
          <p>{formatDate(comment.created_at)}</p>
          <p>comment likes</p>
        </div>
      </div>

      <div style={{ position: "relative" }}>
        {actions && <BsThreeDots onClick={() => setOpen(!open)} />}
        {actions && open && (
          <DropdownMenu>
            {actions &&
              actions.map((action, idx) => <li key={idx}>{action}</li>)}
          </DropdownMenu>
        )}
      </div>
    </div>
  );
};
