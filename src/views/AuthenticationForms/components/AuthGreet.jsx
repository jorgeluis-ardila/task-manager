import PropTypes from 'prop-types';
import { AuthGreetWrapper } from './style';

const AuthGreet = ({ heading, text }) => {
  return (
    <AuthGreetWrapper className="greet">
      <h2>{heading}</h2>
      <p>{text}</p>
    </AuthGreetWrapper>
  );
};

AuthGreet.propTypes = {
  heading: PropTypes.string,
  text: PropTypes.node,
};

export { AuthGreet };
