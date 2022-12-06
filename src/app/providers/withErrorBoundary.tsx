import { ReactNode } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "shared/ui";

export const withErrorBoundary = (component: () => ReactNode) => () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      {component()}
    </ErrorBoundary>
  );
};
