import { useParams } from 'react-router-dom';

export const useGetNavRoutes = () => {
  const { categorySlug, taskSlug } = useParams();

  return [
    {
      to: '/',
      text: 'Home',
      icon: 'home',
    },
    {
      to: '/boards',
      text: 'Tableros',
      icon: 'items',
    },
    {
      to: `/boards/${categorySlug}`,
      text: 'Tablero',
      icon: 'items',
      isDetail: taskSlug ? true : !categorySlug,
    },
    {
      to: `/boards/${categorySlug}/t/${taskSlug}`,
      text: 'Tarea',
      icon: 'items',
      isDetail: !taskSlug,
    },
    {
      to: '/profile',
      text: 'Perfil',
      icon: 'user',
    },
  ];
};
