import { ReactElement, useState } from "react";
import type { PostType, UserData } from "shared/api";
import { formatDate } from "shared/lib/date";
import { AvatarImg, BurgerMenu, LargeImg, ListMenu } from "shared/ui";

type CardProps = {
  post: PostType;
  user: UserData;
  actions?: ReactElement[];
};

export const Card = ({ post, user, actions }: CardProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div>
        <AvatarImg photoUrl={user.picture} size="medium" />
        <div>
          <p>
            {user.firstName} {user.lastName}
          </p>
          <p>{formatDate(post.created_at)}</p>
          <BurgerMenu open={open} setOpen={setOpen} />
          <ListMenu open={open}>
            {actions && actions.map((action, idx) => (
              <li key={idx}>{action}</li>
            ))}
          </ListMenu>
        </div>
      </div>
      <p>{post.text}</p>
      {post.photos.length ? <LargeImg photoUrl={post.photos[0]} /> : null}
    </div>
  );
};