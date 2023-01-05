import React from 'react';
import LoadingIMG  from '../../assets/images/loading.jpg';
import ErrorIMG  from '../../assets/images/error.jpg';
import EmptyIMG  from '../../assets/images/empty.jpg';
import DesktopIMG  from '../../assets/images/desktop.jpg';
import status from './stateLoading.module.css';

const imgTypes = {
  loading: LoadingIMG,
  error: ErrorIMG,
  empty: EmptyIMG,
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

function Status({
  loading = false,
  type,
  message = null,
  highlihgt = null,
  desktop = false
}) {
  return (
    !desktop
    ? <div className={status.container}>
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

export { Status };
