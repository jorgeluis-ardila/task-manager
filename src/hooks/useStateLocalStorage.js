import { useState, useEffect, useCallback } from 'react';
import { getHashId } from 'utils/helpers';
import { getLocalStorage, setLocalStorage } from 'utils';

const formatStorageValue = (value, id, requiredVersion) =>
  requiredVersion ? (typeof value === 'object' ? { version: id, ...value } : { version: id, value: value }) : value;

const useStateLocalStorage = (key, defaultValue, requiredVersion) => {
  const newId = getHashId(typeof defaultValue === 'object' ? JSON.stringify(defaultValue) : defaultValue);
  const prevId = getLocalStorage(key)?.version ?? newId;
  const [localStorageValue, setLocalStorageValue] = useState(() => {
    let formatedValue = formatStorageValue(defaultValue, newId, requiredVersion);
    const value = getLocalStorage(key);
    if (value) return value;
    setLocalStorage(key, formatedValue);
    return defaultValue;
  });

  const setLocalStorageStateValue = useCallback(
    newValue => {
      const newState = typeof newValue === 'function' ? newValue(localStorageValue) : newValue;
      setLocalStorage(key, formatStorageValue(newState, newId));
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

export { useStateLocalStorage };
