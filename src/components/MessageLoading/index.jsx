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
  message = null,
  highlihgt = null,
  desktop = false
}) {
  return (
    !desktop
      ? <div className={`${status.container} ${(type === 'empty') && status['container-empty']} ${(type === 'start') && status['container-start']}`}>
          <Message
            message={message}
            highlihgt={highlihgt}
          />
          {loading &&
            <span className={status.loader}></span>
          }
          <figure className={status['image-container']}>
            <img src={imgTypes[type]} alt={highlihgt} className={`${status.image} ${status[type]}`} />
          </figure>
        </div>
      : <figure className={`${status['image-container']} ${status['image-desktop']}`}>
          <img src={imgTypes[type]} alt={highlihgt} className={`${status.image} ${status[type]}`} />
        </figure>
  );
}

export { StatusMessage }