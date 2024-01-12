import PropTypes from 'prop-types';
import { HeaderWrapper } from './style';

const TitleBar = ({ text, children }) => {
  return (
    <HeaderWrapper>
      <h2 title="Tus Tableros">{text}</h2>
      {children}
    </HeaderWrapper>
  );
};

TitleBar.propTypes = {
  text: PropTypes.string,
  children: PropTypes.node,
};

export { TitleBar };
