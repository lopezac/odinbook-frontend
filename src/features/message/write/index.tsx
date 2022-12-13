import { FormEvent } from "react";
import { useParams } from "react-router-dom";
import { Button, Form, FormRow, Input, Label } from "shared/ui";
import { useViewerModel } from "entities/viewer";
import { MessageModel } from "entities/message";
import { getFormData } from "shared/lib/form-data";

export const WriteMessage = ({ receiver }: { receiver: string }) => {
  const { chatId } = useParams();
  const messageModel = MessageModel();
  const viewerModel = useViewerModel();
  const viewer = viewerModel.useViewer();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = getFormData(e.target as HTMLFormElement);
    await messageModel.createMessage({
      ...data,
      emitter: viewer!._id,
      receiver,
      chat: chatId,
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow>
        <Label>Message</Label>
        <Input
          type="text"
          name="text"
          id="text"
          minLength={1}
          maxLength={1000}
          required
        />
      </FormRow>
      <Button>Send</Button>
    </Form>
  );
};
