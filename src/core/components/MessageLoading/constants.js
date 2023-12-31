import LoadingIMG from 'assets/images/loading.png';
import ErrorIMG from 'assets/images/error.png';
import EmptyIMG from 'assets/images/empty.png';
// import EmptySearchIMG from 'assets/images/empty-search.png';
// import NotFoundIMG from 'assets/images/empty-search.png';

const imageList = {
  loading: LoadingIMG,
  error: ErrorIMG,
  empty: EmptyIMG,
  // emptySearch: EmptySearchIMG,
  // notFound: NotFoundIMG,
};

export const messageList = {
  loading: {
    image: imageList['loading'],
    description: 'No desesperes',
    highlihgt: 'Estamos cargando',
  },
  error: {
    image: imageList['error'],
    description: 'Lo sentimos',
    highlihgt: 'Tuvimos un error',
  },
  empty: {
    image: imageList['empty'],
    description: 'Parece que aun no tienes nada creado',
    highlihgt: 'Opps',
  },
  emptySearch: {
    image: imageList['emptySearch'],
    description: `Lo siento no hubo coincidencias, prueba con otra combinación de filtros.`,
    highlihgt: 'No encontramos lo que buscabas',
  },
  notFound: {
    image: imageList['notFound'],
    description: 'Lo siento no encontramos la página que buscabas',
    highlihgt: 'Pagina no encontrada',
  },
};
