import { Dispatch } from "react";
import { BiComment } from "react-icons/bi";
import { BsPencil } from "react-icons/bs";
import { PostType, UserData } from "shared/api";
import { DropdownRow, IconAction, Link, Para, IconSpan } from "shared/ui";
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
        <IconAction>
          <LikeContent receiver={post._id} />
        </IconAction>,
        <IconAction onClick={() => setOpen(!open)}>
          <IconSpan>
            <BiComment /> Comment
          </IconSpan>
        </IconAction>,
      ]}
      actions={
        isViewerPost
          ? [
              <Link to={`/posts/${post._id}/update`}>
                <DropdownRow>
                  <BsPencil />
                  <Para>Edit post</Para>
                </DropdownRow>
              </Link>,
              <DropdownRow>
                <DeletePost postId={post._id} />
                <Para>Delete post</Para>
              </DropdownRow>,
            ]
          : undefined
      }
    />
  );
};
