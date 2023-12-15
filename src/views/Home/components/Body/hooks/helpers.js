const today = new Date();
const addZero = number => (String(number).length === 1 ? '0' : '');

export const todayString = `${today.getFullYear()}-${addZero(today.getMonth())}${today.getMonth() + 1}-${addZero(
  today.getDate()
)}${today.getDate()}`;

export const getCategoriesValues = data => {
  const options = data.map(item => ({ value: item.id, label: item.name }));
  const categories = options.map(option => option.value);

  return { options, categories };
};
