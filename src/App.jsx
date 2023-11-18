import React from 'react';
import { StoreProvider } from './providers/context';
import ThemeProvider from './providers/theme';
import Home from './views/Home';

const App = () => {
  return (
    <StoreProvider>
      <ThemeProvider>
        <React.StrictMode>
          <Home />
        </React.StrictMode>
      </ThemeProvider>
    </StoreProvider>
  );
};

export default App;
