import React from 'react';
import PropTypes from 'prop-types';
import { messageList } from './constants';
import { MessageWrapper } from './style';

const StatusMessage = ({ type }) => {
  const message = messageList[type];

  return (
    <MessageWrapper>
      <figure className="image-wrapper">
        <img src={message.image} alt={message.highlihgt} />
      </figure>
      <p className="message-hightlith">{message.highlihgt}</p>
      <p className="message-description">{message.description}</p>
    </MessageWrapper>
  );
};

StatusMessage.propTypes = {
  type: PropTypes.string,
};

export { StatusMessage };
