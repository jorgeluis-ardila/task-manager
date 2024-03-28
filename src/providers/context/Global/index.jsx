import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { useStateLocalStorage } from 'hooks';

const GlobalStoreContext = createContext();

const GlobalStoreProvider = ({ children }) => {
  const [theme, setTheme] = useStateLocalStorage('theme', 'light');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  console.log('LOADING:', isLoading);
  console.log('THEME:', theme);

  const onChangeTheme = () => setTheme(prevTheme => (prevTheme !== 'light' ? 'light' : 'dark'));

  const onChangeLoading = value => setIsLoading(value);
  const onChangeError = value => setError(value);

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

GlobalStoreProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { GlobalStoreProvider, useGlobalStore };
