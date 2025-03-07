function cancellable(generator) {
  let rejectFn;
  let resolveFn;
  let isCancelled = false;

  const promise = new Promise((resolve, reject) => {
    resolveFn = resolve;
    rejectFn = reject;
  });

  function step(method, arg) {
    try {
      const { value, done } = generator[method](arg);
      if (done) {
        resolveFn(value);
        return;
      }
      Promise.resolve(value)
        .then((res) => {
          if (!isCancelled) step("next", res);
        })
        .catch((err) => step("throw", err));
    } catch (error) {
      rejectFn(error);
    }
  }

  function cancel() {
    if (!isCancelled) {
      isCancelled = true;
      try {
        step("throw", "Cancelled");
      } catch (error) {
        rejectFn(error);
      }
    }
  }

  step("next");

  return [cancel, promise];
}
