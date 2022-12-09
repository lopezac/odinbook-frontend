import { useContext } from "react";
import { AuthContext } from "../context";
import { ViewerModelType } from "../types";

export const useViewerModel = () => {
  return useContext(AuthContext) as ViewerModelType;
};
