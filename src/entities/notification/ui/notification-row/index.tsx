import { ReactElement } from "react";
import type { Notification } from "shared/api";
import { formatDate } from "shared/lib/date";
import { AvatarImg } from "shared/ui";

type NotificationRowProps = {
  actions?: ReactElement[];
  data: Notification;
};

export const NotificationRow = ({ data, actions }: NotificationRowProps) => {
  return (
    <div>
      <AvatarImg size="medium" photoUrl={data.picture} />
      <div>
        <p>{data.text}</p>
        <p>{formatDate(data.created_at)}</p>
      </div>
      <div>
        {actions && actions.map((action, idx) => <li key={idx}>{action}</li>)}
      </div>
    </div>
  );
};
