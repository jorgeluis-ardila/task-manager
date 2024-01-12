import { round } from 'lodash';
import { md5 } from 'js-md5';

const today = new Date();
const addZero = number => (String(number).length === 1 ? '0' : '');

// CREATES THE STRING WITH THE DATE OF TODAY
export const todayString = `${today.getFullYear()}-${addZero(today.getMonth())}${today.getMonth() + 1}-${addZero(
  today.getDate()
)}${today.getDate()}`;

// CREATE A ID BASED ON THE VALUE
export const getHashId = stringValue => md5(stringValue);

// LOOK FOR THE INDEX BASED ON THE PROP PASSED
export const findIndex = (data, id, prop) => data?.findIndex(item => item?.[prop] === id);

// CHECK IF THE DATE PASSED IS EXPIRED
export const isExpired = date => {
  const currentDate = new Date();
  // const formatedDate = date?.split('-').map(item => parseInt(item));
  // const taskDate = new Date(formatedDate[0], formatedDate[1] - 1, formatedDate[2], 23, 59, 59);
  const taskDate = new Date(`${date}T23:59:59`);
  return currentDate > taskDate;
};

// COMPARE DATE FROM RANGE
export const getToExpired = date => {
  const startDate = new Date();
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 5);
  const taskDate = new Date(`${date}T23:59:59`);
  return taskDate >= startDate && taskDate < endDate;
};

// CHECK IF DATE IS SAME OF FIND DATE
export const getTaskFromDate = (taskDate, findDate) => {
  const findDateString = `${findDate.getFullYear()}-${addZero(findDate.getMonth())}${findDate.getMonth() + 1}-${addZero(
    findDate.getDate()
  )}${findDate.getDate()}T23:59:59`;
  const currentDate = new Date(findDateString);
  const taskDateFormated = new Date(`${taskDate}T23:59:59`);
  return taskDateFormated.getTime() === currentDate.getTime();
};

// CALCULATES THE PERCENTAGE BETWEEN THE TOW VALUES
export const getPercentage = ({ partialValue, totalValue }) => {
  return totalValue === 0 ? 0 : round((100 * partialValue) / totalValue);
};

// GETS THE KEY WIT VALUE TRUE
export const getKeyWithTrueValue = obj => {
  const keyArray = Object.keys(obj);
  const keyWithTrueValue = keyArray.find(key => obj[key] === true);
  return keyWithTrueValue || null;
};

// FORMAT THE CATEGORIES ARRAY FOR A SELECT
export const getCategoriesValues = data => {
  const options = data.map(item => ({ value: item.id, label: item.name }));
  const categories = options.map(option => option.value);

  return { options, categories };
};

// CREATE A SLUG BASED ON THE TEXT
export const createSlug = text => {
  const accentsMap = {
    á: 'a',
    é: 'e',
    í: 'i',
    ó: 'o',
    ú: 'u',
    Á: 'A',
    É: 'E',
    Í: 'I',
    Ó: 'O',
    Ú: 'U',
    ñ: 'n',
    Ñ: 'N',
  };

  const slug = text.replace(/[áéíóúÁÉÍÓÚñÑ]/g, match => accentsMap[match] || match);

  return slug
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, '-')
    .replace(/-{2,}/g, '-')
    .replace(/^-|-$/g, '');
};
