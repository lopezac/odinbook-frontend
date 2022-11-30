import { createContext } from "react";
import { ViewerModelType } from "./types";

export const Context = createContext<ViewerModelType | null>(null);
