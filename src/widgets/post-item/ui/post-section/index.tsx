import { Dispatch } from "react";
import { BiComment } from "react-icons/bi";
import { PostType, UserData } from "shared/api";
import { Button, IconAction, Link, Para } from "shared/ui";
import { PostCard } from "entities/post";
import { LikeQuantityCard } from "entities/like";
import { LikeContent } from "features/like-content";
import { DeletePost } from "features/post";

type PostSectionProp = {
  user: UserData;
  post: PostType;
  open: boolean;
  isViewerPost: boolean;
  setOpen: Dispatch<boolean>;
};

export const PostSection = ({
  user,
  post,
  open,
  setOpen,
  isViewerPost,
}: PostSectionProp) => {
  return (
    <PostCard
      post={post}
      user={user}
      before={[<LikeQuantityCard receiverId={post._id} />]}
      after={[
        <LikeContent receiver={post._id} />,
        <IconAction onClick={() => setOpen(!open)}>
          <BiComment />
          <Para>Comment</Para>
        </IconAction>,
      ]}
      actions={
        isViewerPost
          ? [
              <Link to={`/posts/${post._id}/update`}>
                <Button>Update</Button>
              </Link>,
              <DeletePost postId={post._id} />,
            ]
          : undefined
      }
    />
  );
};
