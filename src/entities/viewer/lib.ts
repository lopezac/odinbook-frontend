import { createContext } from "react";

type ContextType = {
  useViewer: () => void;
};

export const Context = createContext({});
