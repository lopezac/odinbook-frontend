import { ReactNode } from "react";
import { io } from "socket.io-client";
import { SocketContext } from "shared/api";

export const withSocket = (component: () => ReactNode) => () => {
  // change this to getBackendUrl();
  const socket = io("http://localhost:8000");

  return (
    <SocketContext.Provider value={socket}>
      {component()}
    </SocketContext.Provider>
  );
};
