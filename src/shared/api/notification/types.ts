export type CreateNotification = {
  receiver: string;
  emitter: string;
  picture: string;
  text: string;
  type: string;
};

export type Notification = {
  receiver: string;
  emitter: string;
  picture: string;
  text: string;
  type: string;
  created_at: Date;
  _id: string;
};
