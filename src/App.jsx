import React from 'react';
import { DataProvider, ModalProvider, GlobalStoreProvider } from 'providers/context';
import ThemeProvider from 'providers/theme';
import Home from 'views/Home';

const App = () => {
  return (
    <GlobalStoreProvider>
      <DataProvider>
        <ThemeProvider>
          <ModalProvider>
            <React.StrictMode>
              <Home />
            </React.StrictMode>
          </ModalProvider>
        </ThemeProvider>
      </DataProvider>
    </GlobalStoreProvider>
  );
};

export default App;
