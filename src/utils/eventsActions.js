// HANDLE ACTION IF IS THE KEY PASSED
export const onKeyUp = (e, key, action) => {
  if (e.keyCode === key) {
    e.preventDefault();
    action();
  }
};
