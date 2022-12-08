import { useEffect, useState } from "react";
import { Button, Link, AvatarImg } from "shared/ui";
import type { PostType, CommentType, UserData } from "shared/api";
import { CommentCard, CommentModel } from "entities/comment";
import { PostCard } from "entities/post";
import { useViewerModel } from "entities/viewer";
import { LikeQuantityCard } from "entities/like";
import { WriteComment, DeleteComment } from "features/comment";
import { DeletePost } from "features/post";
import { LikeContent } from "features/like-content";

type PostItemProps = { post: PostType; user: UserData };

export const PostItem = ({ post, user }: PostItemProps) => {
  const commentModel = CommentModel();
  const viewerModel = useViewerModel();
  const viewer = viewerModel.useViewer();
  const [comments, setComments] = useState<null | CommentType[]>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    commentModel.getPostComments(post._id).then((data) => setComments(data));
  }, [post]);

  return (
    <>
      <PostCard
        key={post._id}
        post={post}
        user={user}
        before={[<LikeQuantityCard receiverId={post._id} />]}
        after={[
          <LikeContent receiver={post._id} />,
          <Button onClick={() => setOpen(!open)}>Comment</Button>,
        ]}
        actions={[
          <Link to={`/posts/${post._id}/update`}>
            <Button>Update</Button>
          </Link>,
          <DeletePost postId={post._id} />,
        ]}
      />
      <div>
        <div>
          <AvatarImg photoUrl={viewer!.picture} size="medium" />
          <WriteComment userId={user._id} postId={post._id} />
        </div>
        {open &&
          comments &&
          comments.map((comment) => {
            return (
              <CommentCard
                key={comment._id}
                comment={comment}
                user={user}
                after={[
                  <LikeContent receiver={comment._id} />,
                  <LikeQuantityCard receiverId={comment._id} />
                ]}
                actions={[<DeleteComment commentId={comment._id} />]}
              />
            );
          })}
      </div>
    </>
  );
};
