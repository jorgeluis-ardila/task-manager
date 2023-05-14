import React from 'react';

export function useLocalStorage(storageName, initialValue) {
  const [syncronizedInfo, setSyncronizedInfo] = React.useState(true),
        [error, setError] = React.useState(false),
        [loading, setLoading] = React.useState(true),
        [storage, setStorage] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {

      try {
        const itemsStorage = localStorage.getItem(storageName);
        if (!itemsStorage) localStorage.setItem(storageName, JSON.stringify(initialValue));
        let parsedStorage = itemsStorage ? JSON.parse(itemsStorage) : initialValue;

        setStorage(parsedStorage);
        setLoading(false);
        setSyncronizedInfo(true);
      } catch (error) {
        setError(error)
      }

    }, 3000);

  },[syncronizedInfo]);

  const saveStorage = (newStorage) => {
    try {
      const stringifyStorage = JSON.stringify(newStorage);
      localStorage.setItem(storageName, stringifyStorage);
      setStorage(newStorage);
    } catch (error) {
      setError(error)
    }
  };

  const syncronizeInfo = () => {
    setLoading(true);
    setSyncronizedInfo(false);
  }

  return {
    storage,
    saveStorage,
    loading,
    error,
    syncronizeInfo
  };
}