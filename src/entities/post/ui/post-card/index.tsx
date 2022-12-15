import { ReactElement, useState } from "react";
import type { PostType, UserData } from "shared/api";
import { formatDate } from "shared/lib/date";
import { AvatarImg, BurgerMenu, LargeImg, ListMenu, Para } from "shared/ui";
import {
  RowActions,
  PostHeader,
  AvatarHeader,
  PostImage,
  RowInfo,
  BoldPara,
  SmallGrayPara,
} from "./styles";

type CardProps = {
  post: PostType;
  user: UserData;
  actions?: ReactElement[];
  before?: ReactElement[];
  after?: ReactElement[];
};

export const PostCard = ({ post, user, actions, after, before }: CardProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <PostHeader>
        <AvatarHeader>
          <AvatarImg photoUrl={user.picture} size="small" />
          <div>
            <BoldPara>
              {user.firstName} {user.lastName}
            </BoldPara>
            <SmallGrayPara>{formatDate(post.created_at)}</SmallGrayPara>
          </div>
        </AvatarHeader>
        <div style={{ position: "relative" }}>
          {actions && <BurgerMenu open={open} setOpen={setOpen} />}
          {actions && (
            <ListMenu open={open}>
              {actions &&
                actions.map((action, idx) => <li key={idx}>{action}</li>)}
            </ListMenu>
          )}
        </div>
      </PostHeader>

      <Para>{post.text}</Para>

      {post.photos.length && (
        <PostImage>
          <LargeImg photoUrl={post.photos[0]} />
        </PostImage>
      )}

      <RowInfo>
        {before && before.map((action, idx) => <li key={idx}>{action}</li>)}
      </RowInfo>

      <RowActions>
        {after &&
          after.map((action, idx) => (
            <li key={idx} style={{ display: "flex", flex: "1" }}>
              {action}
            </li>
          ))}
      </RowActions>
    </div>
  );
};
