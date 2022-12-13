export type MessageType = {
  receiver: string;
  emitter: string;
  chat: string;
  text: string;
  created_at: Date;
  _id: string;
};

export type CreateMessageType = {
  receiver: string;
  emitter: string;
  chat: string;
  text: string;
};
