export const calculateCompleted = tasks => tasks.filter(task => task?.isCompleted).length;
export const calculateTotal = tasks => tasks.length;
