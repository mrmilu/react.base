export const timeout = (miliseconds: number) =>
  new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, miliseconds);
  });

interface CancelablePromise<T> {
  promise: Promise<T>;
  cancel(): void;
  // The callback runs when the promise is resolved and has been previously canceled.
  onCancel(callback: () => void): void;
}

export const makeCancelable = <T>(promise: Promise<T>): CancelablePromise<T> => {
  let hasCanceled = false;
  let handleCancel: (() => void) | null = null;

  const wrappedPromise = new Promise<T>((resolve, reject) => {
    promise.then((val) => (hasCanceled ? handleCancel?.() : resolve(val)));
    promise.catch((error) => (hasCanceled ? handleCancel?.() : reject(error)));
  });

  return {
    promise: wrappedPromise,
    cancel() {
      hasCanceled = true;
    },
    onCancel(callback) {
      handleCancel = callback;
    }
  };
};
