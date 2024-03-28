import { useState, useEffect } from 'react';

function useStorageListener(syncronizeTasks) {
  const [storageChange, setStorageChange] = useState(false);

  useEffect(() => {
    const onChange = change => {
      if (change.key === 'TODOS_V1') setStorageChange(true);
    };

    window.addEventListener('storage', onChange);

    return () => {
      window.removeEventListener('storage', onChange);
    };
  }, []);

  const handleSync = () => {
    syncronizeTasks();
    setStorageChange(false);
  };

  return {
    storageChange,
    handleSync,
  };
}

export { useStorageListener };
