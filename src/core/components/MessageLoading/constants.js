import LoadingIMG from 'assets/images/loading.png';
import ErrorIMG from 'assets/images/error.png';
import EmptyIMG from 'assets/images/empty.png';
// import EmptySearchIMG from 'assets/images/empty-search.png';
// import NotFoundIMG from 'assets/images/empty-search.png';

export const imageList = {
  loading: LoadingIMG,
  error: ErrorIMG,
  empty: EmptyIMG,
  // emptySearch: EmptySearchIMG,
  // notFound: NotFoundIMG,
};

export const messageList = {
  loading: {
    type: 'loading',
    message: 'No desesperes',
    highlihgt: 'Estamos cargando',
  },
  error: {
    type: 'error',
    message: 'Lo sentimos',
    highlihgt: 'Tuvimos un error',
  },
  empty: {
    type: 'empty',
    message: 'Parece que aun no tienes nada creado',
    highlihgt: 'Opps',
  },
  emptySearch: {
    type: 'emptySearch',
    message: `Lo siento no hubo coincidencias, prueba con otra combinación de filtros.`,
    highlihgt: 'No encontramos lo que buscabas',
  },
  notFound: {
    type: 'notFound',
    message: 'Lo siento no encontramos la página que buscabas',
    highlihgt: 'Pagina no encontrada',
  },
};
