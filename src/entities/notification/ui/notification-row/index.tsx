import { ReactElement } from "react";
import type { Notification } from "shared/api";
import { formatDate } from "shared/lib/date";
import { AvatarImg, SmallGrayPara, SmallPara } from "shared/ui";
import { NotificationDiv, MainTextDiv } from "./styles";

type NotificationRowProps = {
  actions?: ReactElement[];
  data: Notification;
};

export const NotificationRow = ({ data, actions }: NotificationRowProps) => {
  return (
    <NotificationDiv>
      <AvatarImg size="medium" photoUrl={data.picture} />

      <MainTextDiv>
        <SmallPara>{data.text}</SmallPara>
        <SmallGrayPara>{formatDate(data.created_at, "short")}</SmallGrayPara>
      </MainTextDiv>

      <div>
        {actions && actions.map((action, idx) => <li key={idx}>{action}</li>)}
      </div>
    </NotificationDiv>
  );
};
