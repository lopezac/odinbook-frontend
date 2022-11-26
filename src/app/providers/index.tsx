import compose from "compose-function";
import { withRouter } from "./withRouter";
import { withTheme } from "./withTheme";
import { withAuth } from "./withAuth";

export const withProviders = compose(withRouter, withAuth, withTheme);
