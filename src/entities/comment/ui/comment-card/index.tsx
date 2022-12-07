import { ReactElement } from "react";
import { CommentType, UserData } from "shared/api";
import { formatDate } from "shared/lib/date";
import { AvatarImg } from "shared/ui";

type CommentCardProps = {
  comment: CommentType;
  user: UserData;
  actions?: ReactElement[]
};

export const CommentCard = ({ comment, user, actions }: CommentCardProps) => {
  return (
    <div>
      <div>
        <AvatarImg photoUrl={user.picture} size="medium" />
      </div>
      <div>
        <p>
          {user.firstName} {user.lastName}
        </p>
        <p>{comment.text}</p>
        <div>
          <div>
            {actions && actions.map((action, idx) => {
              return <li key={idx}>{action}</li>
            })}
          </div>
          <p>{formatDate(comment.created_at)}</p>
          <p>comment likes</p>
        </div>
      </div>
    </div>
  );
};
