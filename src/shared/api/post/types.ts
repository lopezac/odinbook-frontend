export type CreatePostType = {
  user: string;
  text: string;
  photos?: string[];
  videos?: string[];
  created_at?: Date;
};

export type PostType = {
  _id: string;
  user: string;
  text: string;
  photos: string[];
  videos: string[];
  created_at: Date;
};
