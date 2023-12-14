import { useState, useEffect, useCallback } from 'react';
import { getHashId } from 'utils/helpers';

const getItem = key => {
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

const setItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const formatStorageValue = (value, id, requiredVersion) =>
  requiredVersion ? (typeof value === 'object' ? { version: id, ...value } : { version: id, value: value }) : value;

const useStateLocalStorage = (key, defaultValue, requiredVersion) => {
  const newId = getHashId(typeof defaultValue === 'object' ? JSON.stringify(defaultValue) : defaultValue);
  const prevId = getItem(key)?.version ?? newId;
  const [localStorageValue, setLocalStorageValue] = useState(() => {
    let formatedValue = formatStorageValue(defaultValue, newId, requiredVersion);
    const value = getItem(key);
    if (value) return value;
    setItem(key, formatedValue);
    return defaultValue;
  });

  const setLocalStorageStateValue = useCallback(
    newValue => {
      const newState = typeof newValue === 'function' ? newValue(localStorageValue) : newValue;
      setItem(key, formatStorageValue(newState, newId));
      setLocalStorageValue(formatStorageValue(newState, newId));
    },
    [key, localStorageValue, newId]
  );

  useEffect(() => {
    if (newId !== prevId) {
      localStorage.removeItem(key);
      setLocalStorageStateValue(defaultValue);
    }
  }, [key, defaultValue, newId, prevId, setLocalStorageStateValue]);

  return [localStorageValue, setLocalStorageStateValue];
};

export { useStateLocalStorage, setItem as setLocalStorage, getItem as getLocalStorage };
