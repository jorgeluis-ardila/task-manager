import React from 'react'

function useLocalStorage(storageName, initialValue) {
  const [error, setError] = React.useState(false),
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
      } catch (error) {
        setError(error)
      }

    }, 10000);
  })

  const saveStorage = (newStorage) => {
    try {
      const stringifyStorage = JSON.stringify(newStorage);
      localStorage.setItem(storageName, stringifyStorage);
      setStorage(newStorage);
    } catch (error) {
      setError(error)
    }
  };

  return {
    storage,
    saveStorage,
    loading,
    error
  };
}

export { useLocalStorage }