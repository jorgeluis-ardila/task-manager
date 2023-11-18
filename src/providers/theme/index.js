import { ThemeProvider as EmotionThemeProvider, Global } from '@emotion/react';
import { useStore } from '../context';
import getThemeConfig from './config';
import GlobalStyles from './style';

const ThemeProvider = ({ children }) => {
  const { theme } = useStore();
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
