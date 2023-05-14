const onKeyUp = (e, key, action) => {
  const keyCode = {
    enter: 13,
    espace: 27
  }
  if (e.keyCode === keyCode[key]) {
    e.preventDefault();
    action();
  }
};

export { onKeyUp }