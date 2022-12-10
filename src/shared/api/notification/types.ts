export type CreateNotification = {
  receiver: string;
  emitter: string;
  picture: string;
  text: string;
};

export type Notification = {
  receiver: string;
  emitter: string;
  picture: string;
  text: string;
  created_at: Date;
  _id: string;
};
