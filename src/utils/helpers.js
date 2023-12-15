import { round } from 'lodash';
import { md5 } from 'js-md5';

export const getHashId = stringValue => md5(stringValue);

export const findIndex = (data, id, prop) => data?.findIndex(item => item?.[prop] === id);

export const onKeyUp = (e, key, action) => {
  if (e.keyCode === key) {
    e.preventDefault();
    action();
  }
};

export const isExpired = date => {
  const currentDate = new Date();
  const formatedDate = date.split('-').map(item => parseInt(item));
  const taskDate = new Date(formatedDate[0], formatedDate[1] - 1, formatedDate[2], 23, 59, 59);
  return currentDate > taskDate;
};

export const getPercentage = ({ partialValue, totalValue }) => {
  return totalValue === 0 ? 0 : round((100 * partialValue) / totalValue);
};

export const getKeyWithTrueValue = obj => {
  const keyArray = Object.keys(obj);
  const keyWithTrueValue = keyArray.find(key => obj[key] === true);
  return keyWithTrueValue || null;
};
