import React from 'react';
import LoadingIMG  from '../../assets/images/loading.png';
import ErrorIMG  from '../../assets/images/error.png';
import EmptyIMG  from '../../assets/images/empty.png';
import DesktopIMG  from '../../assets/images/desktop.png';
import status from './stateLoading.module.css';

const imgTypes = {
  loading: LoadingIMG,
  error: ErrorIMG,
  empty: LoadingIMG,
  start: EmptyIMG,
  desktop: DesktopIMG
};

function Message({message, highlihgt}) {
  return (
    <p className={status.message}>
      {message}
      <span className={status['message-higlight']}>{highlihgt}</span>
    </p>
  );
}

function StatusMessage({
  loading = false,
  type,
  searchValue,
  desktop = false
}) {

  const statusMessageText = {
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
      message: `Lo siento no hubo coincidencias ${searchValue && 'para'}`,
      highlihgt: searchValue,
    },
    start: {
      type: 'start',
      message: '¿Aun no tienes tareas creadas?',
      highlihgt: 'Que esperas para crearlas',
    }
  }

  return (
    !desktop
      ? <div className={`${status.container} ${(type === 'empty') && status['container-empty']} ${(type === 'start') && status['container-start']}`}>
          <Message
            message={statusMessageText[type].message}
            highlihgt={statusMessageText[type].highlihgt}
          />
          {loading &&
            <span className={status.loader}></span>
          }
          <figure className={status['image-container']}>
            <img src={imgTypes[type]} alt={statusMessageText[type].highlihgt} className={`${status.image} ${status[type]}`} />
          </figure>
        </div>
      : <figure className={`${status['image-container']} ${status['image-desktop']}`}>
          <img src={imgTypes[type]} alt={statusMessageText[type].highlihgt} className={`${status.image} ${status[type]}`} />
        </figure>
  );
}

export { StatusMessage }