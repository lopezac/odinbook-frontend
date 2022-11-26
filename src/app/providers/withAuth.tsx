import { createContext, ReactNode } from "react";
import { SessionStorage } from "shared/api";
import { viewerModel } from "entities/viewer";

const AuthContext = createContext({});

const AuthProvider = (component: () => ReactNode) => {
  const user = SessionStorage.get("user");

  viewerModel.setViewer(user);

  return <AuthContext.Provider value={{}}>{component()}</AuthContext.Provider>;
};

export const withAuth = (component: () => ReactNode) => () => {
  return AuthProvider(component);
};
