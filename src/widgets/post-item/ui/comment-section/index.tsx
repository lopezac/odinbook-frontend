import { CommentType, PostType } from "shared/api";
import { AvatarImg, DropdownRow } from "shared/ui";
import { CommentCard } from "entities/comment";
import { LikeQuantityCard } from "entities/like";
import { useViewerModel } from "entities/viewer";
import { LikeContent } from "features/like-content";
import { WriteComment, DeleteComment } from "features/comment";
import { SectionDiv, WriteCommentRow } from "./styles";

type CommentSectionProps = {
  post: PostType;
  comments: CommentType[];
  isViewerComment: boolean;
};

export const CommentSection = ({
  post,
  comments,
  isViewerComment,
}: CommentSectionProps) => {
  const viewer = useViewerModel().useViewer();

  return (
    <SectionDiv>
      <WriteCommentRow>
        <AvatarImg photoUrl={viewer!.picture} size="small" />
        <WriteComment postId={post._id} />
      </WriteCommentRow>

      {comments.map((comment) => {
        return (
          <CommentCard
            key={comment._id}
            comment={comment}
            userId={comment.user}
            before={[<LikeContent receiver={comment._id} />]}
            after={[<LikeQuantityCard receiverId={comment._id} />]}
            actions={
              isViewerComment
                ? [
                    <DropdownRow>
                      <DeleteComment commentId={comment._id} />
                    </DropdownRow>,
                  ]
                : undefined
            }
          />
        );
      })}
    </SectionDiv>
  );
};
