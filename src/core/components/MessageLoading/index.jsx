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
      <div className="message-wrapper">
        <p className="message-hightligth">{message.highlihgt}</p>
        <p className="message-description">{message.description}</p>
      </div>
    </MessageWrapper>
  );
};

StatusMessage.propTypes = {
  type: PropTypes.string,
};

export { StatusMessage };
