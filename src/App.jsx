import { StrictMode } from 'react';
import { DataProvider, ModalProvider, GlobalStoreProvider, UserProvider } from 'providers/context';
import ThemeProvider from 'providers/theme';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './AppRoutes';

const App = () => {
  // useEffect(() => {
  //   window.addEventListener('load', () => {
  //     checkLogin();
  //   });
  // }, [])

  return (
    <BrowserRouter basename="/app">
      <GlobalStoreProvider>
        <UserProvider>
          <DataProvider>
            <ThemeProvider>
              <ModalProvider>
                <StrictMode>
                  <AppRoutes />
                </StrictMode>
              </ModalProvider>
            </ThemeProvider>
          </DataProvider>
        </UserProvider>
      </GlobalStoreProvider>
    </BrowserRouter>
  );
};

export default App;
