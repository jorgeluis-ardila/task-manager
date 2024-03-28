export const getLocalStorage = key => {
  try {
    const value = localStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
  } catch (error) {
    console.error('error in useLocalStorageState: ', error);
  }

  return undefined;
};

export const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const removeLocalStorage = key => {
  localStorage.removeItem(key);
};
