import compose from "compose-function";
import { withRouter } from "./withRouter";
import { withTheme, ThemeType } from "./withTheme";
import { withAuth } from "./withAuth";
import { withErrorBoundary } from "./withErrorBoundary";

export const withProviders = compose(
  withRouter, withAuth, withTheme, withErrorBoundary
);
export type { ThemeType };
