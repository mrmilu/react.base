import { Component } from "react";
import * as Sentry from "@sentry/nextjs";
import type { BaseError } from "@/src/core/app/domain/models/base_error";
import { AppErrorBoundaryStyled } from "@/src/ui/components/app_error_boundary/app_error_boundary.styled";

interface State {
  hasError: boolean;
  errorMsg: string;
}

export class AppErrorBoundary extends Component {
  state: State = {
    hasError: false,
    errorMsg: ""
  };

  constructor(props: Record<string, unknown>) {
    super(props);
  }

  static getDerivedStateFromError(error: BaseError) {
    return { errorMsg: error.message, hasError: true };
  }

  componentDidCatch(error: BaseError) {
    this.setState({
      hasError: true,
      errorMsg: error.message
    });
    Sentry.captureException(error);
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;

    if (hasError)
      return (
        <AppErrorBoundaryStyled>
          <div>
            <h2>
              <b>Something went wrong</b>
            </h2>
            <h3>This is an error boundary</h3>
          </div>
        </AppErrorBoundaryStyled>
      );
    return children;
  }
}
