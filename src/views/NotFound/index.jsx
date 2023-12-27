import { ErrorPageWrapper } from './style';

const NotFound = () => {
  console.log('NOT FOUND');
  return (
    <ErrorPageWrapper>
      <h1>Error 404</h1>
      <p>pagina no encontrada</p>
    </ErrorPageWrapper>
  );
};
export { NotFound };
