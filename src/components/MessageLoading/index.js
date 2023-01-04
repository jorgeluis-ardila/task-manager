import React from 'react';
import LoadingIMG  from '../../assets/images/loading.jpg';
import ErrorIMG  from '../../assets/images/error.jpg';
import EmptyIMG  from '../../assets/images/empty.jpg';
import status from './stateLoading.module.css';

const imgTypes = {
  loading: LoadingIMG,
  error: ErrorIMG,
  empty: EmptyIMG,
};

function Message({message, highlihgt}) {
  return (
    <p className={status.message}>
      {message}
      <span className={status['message-higlight']}>{highlihgt}</span>
    </p>
  );
}

function Status({ loading = false, type, message, highlihgt }) {
  return (
    <div className={status.container}>
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
  );
}

export { Status };
