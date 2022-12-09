import { CommentType, PostType, UserData } from "shared/api";
import { AvatarImg } from "shared/ui";
import { CommentCard } from "entities/comment";
import { LikeQuantityCard } from "entities/like";
import { LikeContent } from "features/like-content";
import { WriteComment, DeleteComment } from "features/comment";

type CommentSectionProps = {
  user: UserData;
  post: PostType;
  comments: CommentType[];
  open: boolean;
  isViewerComment: boolean;
};

export const CommentSection = ({
  user,
  post,
  comments,
  open,
  isViewerComment,
}: CommentSectionProps) => {
  if (!open) return <></>;
  return (
    <div>
      <div>
        <AvatarImg photoUrl={user.picture} size="medium" />
        <WriteComment userId={user._id} postId={post._id} />
      </div>
      {comments.map((comment) => {
        return (
          <CommentCard
            key={comment._id}
            comment={comment}
            user={user}
            after={[
              <LikeContent receiver={comment._id} />,
              <LikeQuantityCard receiverId={comment._id} />,
            ]}
            actions={
              isViewerComment
                ? [<DeleteComment commentId={comment._id} />]
                : undefined
            }
          />
        );
      })}
    </div>
  );
};
