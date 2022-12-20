import compose from "compose-function";
import { withRouter } from "./withRouter";
import { withTheme, ThemeType } from "./withTheme";
import { withAuth } from "./withAuth";
import { withErrorBoundary } from "./withErrorBoundary";
import { withSocket } from "./withSocket";

export const withProviders = compose(
  withRouter, withSocket, withAuth, withTheme, withErrorBoundary
);
export type { ThemeType };
