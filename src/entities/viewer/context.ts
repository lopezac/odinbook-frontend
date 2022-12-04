import { createContext } from "react";
import { ViewerModelType } from "./types";

export const AuthContext = createContext<ViewerModelType | null>(null);
