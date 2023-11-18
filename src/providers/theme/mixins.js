const addLight = (color, amount) => {
  let cc = parseInt(color, 16) + amount;
  let c = cc > 255 ? 255 : cc;
  c = c.toString(16).length > 1 ? c.toString(16) : `0${c.toString(16)}`;
  return c;
};

const subtractLight = (color, amount) => {
  let cc = parseInt(color, 16) - amount;
  let c = cc < 0 ? 0 : cc;
  c = c.toString(16).length > 1 ? c.toString(16) : `0${c.toString(16)}`;
  return c;
};

export const utils = {
  lighten: (color, amount) => {
    color = color.indexOf('#') >= 0 ? color.substring(1, color.length) : color;
    amount = parseInt((255 * amount) / 100);
    return (color = `#${addLight(color.substring(0, 2), amount)}${addLight(color.substring(2, 4), amount)}${addLight(
      color.substring(4, 6),
      amount
    )}`);
  },
  darken: (color, amount) => {
    color = color.indexOf('#') >= 0 ? color.substring(1, color.length) : color;
    amount = parseInt((255 * amount) / 100);
    return (color = `#${subtractLight(color.substring(0, 2), amount)}${subtractLight(
      color.substring(2, 4),
      amount
    )}${subtractLight(color.substring(4, 6), amount)}`);
  },
  hexToRGB: (hex, alfa) => {
    const pattern_color = '^#([A-Fa-f0-9]{6})$';
    if (hex.match(pattern_color)) {
      const hexCode = hex.replace('#', '');
      const r = parseInt(hexCode.substring(0, 2), 16);
      const g = parseInt(hexCode.substring(2, 4), 16);
      const b = parseInt(hexCode.substring(4, 6), 16);
      return `rgba(${r},${g},${b}, ${alfa})`;
    } else {
      alert('Error Color Format');
    }
  },
};

export const mixins = {
  validateMode: mode => colors => {
    if (typeof colors === 'string') {
      return colors;
    }
    const customColors = {
      light: colors.light,
      dark: colors.dark,
    };
    return customColors[mode];
  },
  backgroundMode: mode => {
    const customColors = {
      light: '',
      dark: '',
    };
    return customColors[mode];
  },
};
