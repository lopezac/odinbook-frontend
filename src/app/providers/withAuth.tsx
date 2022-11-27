import { createContext, ReactNode } from "react";
import { SessionStorage } from "shared/api/SessionStorage";
import { ViewerModel } from "entities/viewer";

const AuthContext = createContext({});

const AuthProvider = (component: () => ReactNode) => {
  const user = SessionStorage.get("user");
  const viewerModel = new (ViewerModel as any)();

  viewerModel.setViewer(user);

  return (
    <AuthContext.Provider value={viewerModel}>
      {component()}
    </AuthContext.Provider>
  );
};

export const withAuth = (component: () => ReactNode) => () => {
  return AuthProvider(component);
};
