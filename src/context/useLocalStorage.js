import React from 'react';

export function useLocalStorage(storageName, initialValue) {
  const [error, setError] = React.useState(false),
        [loading, setLoading] = React.useState(true),
        [storage, setStorage] = React.useState(initialValue),
        [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {

      try {
        const itemsStorage = localStorage.getItem(storageName);
        if (!itemsStorage) localStorage.setItem(storageName, JSON.stringify(initialValue));
        let parsedStorage = itemsStorage ? JSON.parse(itemsStorage) : initialValue;

        setStorage(parsedStorage);
        setLoading(false);
      } catch (error) {
        setError(error)
      }

    }, 1500);
  // eslint-disable-next-line
  },[]);

  const saveStorage = (newStorage) => {
    try {
      const stringifyStorage = JSON.stringify(newStorage);
      localStorage.setItem(storageName, stringifyStorage);
      setStorage(newStorage);
    } catch (error) {
      setError(error)
    }
  };

  const detectSize = () => {
    const container = document.getElementById('root');
    setIsMobile(window.innerWidth <= 768 ? true : false);
    container.style.height = `${document.documentElement.clientHeight}px`;
  }

  return {
    storage,
    saveStorage,
    loading,
    error,
    isMobile,
    detectSize
  };
}