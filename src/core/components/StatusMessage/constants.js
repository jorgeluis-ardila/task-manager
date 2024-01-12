import { ReactComponent as LoadingIMG } from 'assets/images/loading.svg';
import { ReactComponent as ErrorIMG } from 'assets/images/error.svg';
import { ReactComponent as EmptyIMG } from 'assets/images/non-items.svg';
import { ReactComponent as EmptySearchIMG } from 'assets/images/empty-search.svg';
import { ReactComponent as NotFoundIMG } from 'assets/images/not-found.svg';

export const messageList = {
  loading: {
    image: props => <LoadingIMG {...props} />,
    description: 'No desesperes estamos trayendo todo lo necesario.',
    highlihgt: 'Estamos Cargando',
  },
  error: {
    image: props => <ErrorIMG {...props} />,
    description: 'Algo a sucedido por favor vuelve al inicio.',
    highlihgt: 'Opps, tuvimos un problema',
  },
  emptyHome: {
    // image: props => <EmptySearchIMG {...props} />,
    description: 'Parece que no tienes tareas asociadas',
    highlihgt: 'Opps, no hay tareas',
  },
  empty: {
    image: props => <EmptyIMG {...props} />,
    description: '¡Que esperas crea tus tablero y tareas ahora mismo!',
    highlihgt: 'Aun no has creado nada',
  },
  emptySearch: {
    image: props => <EmptySearchIMG {...props} />,
    description: `Intenta ajustar tus filtros o el texto que estas buscando.`,
    highlihgt: 'Opps, no lo econtramos',
  },
  notFound: {
    image: props => <NotFoundIMG {...props} />,
    description: 'Esta página no existe intenta de otra manera.',
    highlihgt: 'Eyy, parece no existir',
  },
};
