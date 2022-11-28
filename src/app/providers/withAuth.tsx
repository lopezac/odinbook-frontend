import { ReactNode } from "react";
import { ViewerModel, AuthContext } from "entities/viewer";

export const withAuth = (component: () => ReactNode) => () => {
  const viewerModel = ViewerModel();

  return (
    <AuthContext.Provider value={viewerModel}>
      {component()}
    </AuthContext.Provider>
  );
};
