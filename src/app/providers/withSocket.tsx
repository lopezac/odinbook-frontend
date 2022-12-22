import { ReactNode } from "react";
import { io } from "socket.io-client";
import { SocketContext } from "shared/api";
import { REST_API_URL } from "shared/config";

export const withSocket = (component: () => ReactNode) => () => {
  const socket = io(REST_API_URL!);

  return (
    <SocketContext.Provider value={socket}>
      {component()}
    </SocketContext.Provider>
  );
};
