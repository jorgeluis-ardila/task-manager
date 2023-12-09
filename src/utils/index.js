import _ from 'lodash';

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
  return _.round((100 * partialValue) / totalValue);
};
