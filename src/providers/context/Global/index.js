import { createContext, useCallback, useContext, useState } from 'react';
import { useStateLocalStorage } from 'hooks';

const GlobalStoreContext = createContext();

const GlobalStoreProvider = ({ children }) => {
  const [theme, setTheme] = useStateLocalStorage('theme', 'light');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  console.log('LOADING:', isLoading);
  const onChangeTheme = () => setTheme(prevTheme => (prevTheme !== 'light' ? 'light' : 'dark'));

  const onChangeLoading = value => setIsLoading(value);
  const onChangeError = useCallback(value => setError(value), []);

  return (
    <GlobalStoreContext.Provider
      value={{
        theme,
        onChangeTheme,
        isLoading,
        onChangeLoading,
        error,
        onChangeError,
      }}
    >
      {children}
    </GlobalStoreContext.Provider>
  );
};

const useGlobalStore = () => {
  const globalContext = useContext(GlobalStoreContext);
  return globalContext;
};

export { GlobalStoreProvider, useGlobalStore };
