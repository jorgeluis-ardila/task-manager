import { mixins, utils } from './mixins';
import 'assets/fonts/hauora/Hauora-Bold.woff2';
import 'assets/fonts/hauora/Hauora-Bold.woff';
import 'assets/fonts/hauora/Hauora-ExtraBold.woff2';
import 'assets/fonts/hauora/Hauora-ExtraBold.woff';
import 'assets/fonts/hauora/Hauora-ExtraLight.woff2';
import 'assets/fonts/hauora/Hauora-ExtraLight.woff';
import 'assets/fonts/hauora/Hauora-Light.woff2';
import 'assets/fonts/hauora/Hauora-Light.woff';
import 'assets/fonts/hauora/Hauora-Medium.woff2';
import 'assets/fonts/hauora/Hauora-Medium.woff';
import 'assets/fonts/hauora/Hauora-Regular.woff2';
import 'assets/fonts/hauora/Hauora-Regular.woff';
import 'assets/fonts/hauora/Hauora-SemiBold.woff2';
import 'assets/fonts/hauora/Hauora-SemiBold.woff';
import './fonts.css';
import colors from './colors';
import shadows from './shadows';

const getThemeConfig = mode => {
  const validateMode = mixins.validateMode(mode);
  const backgroundMode = mixins.backgroundMode(mode);
  return {
    hexToRGB: utils.hexToRGB,
    validateMode,
    backgroundMode,
    colors,
    shadows,
    typography: {
      family: {
        montserrat: 'Montserrat',
        hauora: {
          bold: 'HauoraBold',
          extrabold: 'HauoraExtrabold',
          extralight: 'HauoraExtralight',
          light: 'HauoraLight',
          medium: 'HauoraMedium',
          regular: 'HauoraRegular',
          semibold: 'HauoraSemibold',
        },
      },
      size: value => `${value / 16}rem`,
    },
  };
};

export default getThemeConfig;
