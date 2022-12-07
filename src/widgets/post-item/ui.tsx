import { useEffect, useState } from "react";
import { Button, Link } from "shared/ui";
import type { PostType, CommentType, UserData } from "shared/api";
import { CommentCard, CommentModel } from "entities/comment";
import { PostCard } from "entities/post";
import { WriteComment } from "features/comment";
import { DeletePost } from "features/post";

type PostItemProps = { post: PostType; user: UserData };

export const PostItem = ({ post, user }: PostItemProps) => {
  const commentModel = CommentModel();
  const [comments, setComments] = useState<null | CommentType[]>(null);

  useEffect(() => {
    commentModel.getPostComments(post._id).then((data) => setComments(data));
  }, [post]);

  return (
    <>
      <PostCard
        key={post._id}
        post={post}
        user={user}
        actions={[
          <Link to={`/posts/${post._id}/update`}>
            <Button>Update</Button>
          </Link>,
          <DeletePost postId={post._id} />,
        ]}
      />
      <div>
        <div>
          <p>Viewer avatar</p>
          <WriteComment userId={user._id} postId={post._id} />
        </div>
        {comments &&
          comments.map((comment) => {
            return (
              <CommentCard key={comment._id} comment={comment} user={user} />
            );
          })}
      </div>
    </>
  );
};
