export const INITIAL_DATA = [
  {
    id: 1,
    name: 'Categori Name really long too',
    tasks: [
      {
        id: 1,
        name: 'Task Title 1', //max lenght 30
        description: 'Task description, yara yara numbeleque yara yara', //max lenght 100
        isCompleted: true,
        dueDate: '2023-11-30',
        category: { name: 'Categori Name really long too', id: 1 },
      },
      {
        id: 2,
        name: 'Task Title 2', //max lenght 30
        description: 'Task description, yara yara numbeleque yara yara', //max lenght 100
        isCompleted: true,
        dueDate: '2023-11-30',
        category: { name: 'Categori Name really long too', id: 1 },
      },
      {
        id: 3,
        name: 'Task Title 3', //max lenght 30
        description: 'Task description, yara yara numbeleque yara yara', //max lenght 100
        isCompleted: false,
        dueDate: '2023-07-30',
        category: { name: 'Categori Name really long too', id: 1 },
      },
      {
        id: 4,
        name: 'Task Title 4', //max lenght 30
        description: 'Task description, yara yara numbeleque yara yara', //max lenght 100
        isCompleted: false,
        dueDate: '2023-11-30',
        category: { name: 'Categori Name really long too', id: 1 },
      },
      {
        id: 5,
        name: 'Task Title 5', //max lenght 30
        description: 'Task description, yara yara numbeleque yara yara', //max lenght 100
        isCompleted: true,
        dueDate: '2022-07-30',
        category: { name: 'Categori Name really long too', id: 1 },
      },
    ],
    isFavorite: false,
    totalTasks: 5,
    completedTasks: 2,
  },
  {
    id: 2,
    name: 'Category Name 2',
    tasks: [
      {
        id: 1,
        name: 'Task Title 1', //max lenght 30
        description: 'Task description, yara yara numbeleque yara yara', //max lenght 100
        isCompleted: true,
        dueDate: '2023-11-30',
        category: { name: 'Category Name 2', id: 2 },
      },
      {
        id: 2,
        name: 'Task Title 2', //max lenght 30
        description: 'Task description, yara yara numbeleque yara yara', //max lenght 100
        isCompleted: false,
        dueDate: '2023-11-30',
        category: { name: 'Category Name 2', id: 2 },
      },
    ],
    isFavorite: false,
    totalTasks: 2,
    completedTasks: 1,
  },
  {
    id: 3,
    name: 'The Name of Category',
    tasks: [
      {
        id: 1,
        name: 'Task Title', //max lenght 30
        description: 'Task description, yara yara numbeleque yara yara', //max lenght 100
        isCompleted: true,
        dueDate: '2023-11-30',
        category: { name: 'The Name of Category', id: 3 },
      },
    ],
    isFavorite: false,
    totalTasks: 10,
    completedTasks: 0,
  },
  {
    id: 4,
    name: 'The Name of Category 4',
    tasks: [
      {
        id: 1,
        name: 'Task Title', //max lenght 30
        description: 'Task description, yara yara numbeleque yara yara', //max lenght 100
        isCompleted: true,
        dueDate: '2023-11-30',
        category: { name: 'The Name of Category 4', id: 4 },
      },
    ],
    isFavorite: false,
    totalTasks: 10,
    completedTasks: 0,
  },
];
