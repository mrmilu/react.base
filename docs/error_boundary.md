## Error boundaries

To avoid ui errors breaking the app and make it unusable we are going to implement error boundaries at
page level (in our routes object). This way we can guarantee if a page breaks the user can still navigate it's way out and the application
maintains interactive.

[Error boundaries](https://reactjs.org/docs/error-boundaries.html) is a technique introduced in React 16.

> Error boundaries are React components that catch JavaScript errors anywhere in their child component tree,
> log those errors, and display a fallback UI instead of the component tree that crashed.
> Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of
> the whole tree below them.

The granularity of the error boundaries depends on each app, but a minimum of page level boundary must be set.
