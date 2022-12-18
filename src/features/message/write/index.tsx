import { FormEvent } from "react";
import { useParams } from "react-router-dom";
import { BlueButton, FormRow, Input } from "shared/ui";
import { getFormData } from "shared/lib/form-data";
import { useViewerModel } from "entities/viewer";
import { MessageModel } from "entities/message";
import { MessageForm } from "./styles";

export const WriteMessage = ({ receiver }: { receiver: string }) => {
  const { chatId } = useParams();
  const messageModel = MessageModel();
  const viewerModel = useViewerModel();
  const viewer = viewerModel.useViewer();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = getFormData(e.currentTarget as HTMLFormElement);
    const input = e.currentTarget[0] as HTMLInputElement;
    await messageModel.createMessage({
      ...data,
      emitter: viewer!._id,
      receiver,
      chat: chatId,
    });
    input.value = "";
  };

  return (
    <MessageForm onSubmit={handleSubmit}>
      <FormRow>
        <Input
          type="text"
          name="text"
          id="text"
          minLength={1}
          maxLength={1000}
          required
        />
      </FormRow>
      <BlueButton type="submit">Send</BlueButton>
    </MessageForm>
  );
};
