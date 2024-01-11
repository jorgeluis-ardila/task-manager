import PropTypes from 'prop-types';
import { AuthGreetWrapper } from './style';

const AuthGreet = ({ heading, text }) => {
  const Text = text();
  return (
    <AuthGreetWrapper className="greet">
      <h2>{heading}</h2>
      <p>{Text}</p>
    </AuthGreetWrapper>
  );
};

AuthGreet.protoTypes = {
  heading: PropTypes.string,
  text: PropTypes.node,
};

export { AuthGreet };
