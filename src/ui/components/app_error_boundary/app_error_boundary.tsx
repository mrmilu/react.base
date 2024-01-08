import type { PropsWithChildren } from "react";
import { Component } from "react";
import type { BaseError } from "@/src/core/app/domain/models/base_error";
import * as Sentry from "@sentry/react";
import css from "./app_error_boundary.css";

interface State {
  hasError: boolean;
  errorMsg: string;
}

export class AppErrorBoundary extends Component<PropsWithChildren<Record<string, unknown>>> {
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
        <div className={css.wrapper}>
          <div className={css.content}>
            <h2>
              <b>Something went wrong</b>
            </h2>
            <h3>This is an error boundary</h3>
          </div>
        </div>
      );
    return children;
  }
}
