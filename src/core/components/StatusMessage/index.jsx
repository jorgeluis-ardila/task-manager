import PropTypes from 'prop-types';
import { messageList } from './constants';
import { MessageWrapper } from './style';

const StatusMessage = ({ type, className }) => {
  const message = messageList[type];
  const Image = message?.image;

  return (
    <MessageWrapper className={className}>
      <div className="message-wrapper">
        <p className="message-hightligth">{message.highlihgt}</p>
        <p className="message-description">{message.description}</p>
      </div>
      <div className="image-wrapper">{message?.image && <Image />}</div>
    </MessageWrapper>
  );
};

StatusMessage.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
};

export { StatusMessage };
