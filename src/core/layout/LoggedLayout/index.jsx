import PropTypes from 'prop-types';
import { Body, Header, MainWrapper } from './components';

const LoggedLayout = ({ children }) => {
  return (
    <MainWrapper>
      <Header />
      <Body>{children}</Body>
    </MainWrapper>
  );
};

LoggedLayout.protoTypes = {
  children: PropTypes.element,
};

export { LoggedLayout };
