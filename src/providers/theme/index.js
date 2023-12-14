import { ThemeProvider as EmotionThemeProvider, Global } from '@emotion/react';
import { useGlobalStore } from 'providers/context';
import getThemeConfig from './config';
import GlobalStyles from './style';

const ThemeProvider = ({ children }) => {
  const { theme } = useGlobalStore();
  const themeConfig = getThemeConfig(theme);
  const globalStyles = GlobalStyles({ theme: themeConfig });

  return (
    <EmotionThemeProvider theme={themeConfig}>
      <Global styles={globalStyles} />
      {children}
    </EmotionThemeProvider>
  );
};

export default ThemeProvider;
