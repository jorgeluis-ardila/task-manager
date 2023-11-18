import { utils } from '../mixins';
import colors from '../colors';

const blue = {
  main: `0px 0px 20px 0px ${utils.hexToRGB(colors.blue.main, 0.5)}`,
  dark: `0px 2px 5px 0px ${utils.hexToRGB(colors.blue[90], 0.3)}`,
};

export default blue;
