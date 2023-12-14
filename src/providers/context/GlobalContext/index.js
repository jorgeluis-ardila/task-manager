import { createContext, useContext, useState } from 'react';
import { useStateLocalStorage } from 'hooks';

const GlobalStoreContext = createContext();

const GlobalStoreProvider = ({ children }) => {
  const [theme, setTheme] = useStateLocalStorage('theme', 'light');
  const [isLoading /* setIsLoading */] = useState(false);
  const [error /* setError */] = useState(false);

  const onChangeTheme = () => setTheme(prevTheme => (prevTheme !== 'light' ? 'light' : 'dark'));

  return (
    <GlobalStoreContext.Provider
      value={{
        theme,
        onChangeTheme,
        isLoading,
        error,
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
