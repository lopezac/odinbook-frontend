export type CreateCommentType = {
  text: string;
  user: string;
  post: string;
};

export type CommentType = {
  text: string;
  user: string;
  post: string;
  _id: string;
  created_at: Date;
};
