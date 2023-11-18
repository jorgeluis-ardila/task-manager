import { utils } from '../mixins';
import colors from '../colors';

const green = {
  main: `0px 0px 20px 0px ${utils.hexToRGB(colors.green.main, 0.5)}`,
  dark: `0px 0px 10px 0px ${utils.hexToRGB(colors.green[80], 0.15)}`,
  dark2: `0px 5px 5px 0px ${utils.hexToRGB(colors.green[80], 0.15)}`,
};

export default green;
