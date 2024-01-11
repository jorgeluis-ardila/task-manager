import PropTypes from 'prop-types';
import { HeaderWrapper } from './style';

const TitleBar = ({ text }) => {
  return (
    <HeaderWrapper>
      <div className="title-container">
        <h2 title="Tus Tableros">{text}</h2>
      </div>
    </HeaderWrapper>
  );
};

TitleBar.propTypes = {
  text: PropTypes.string,
};

export { TitleBar };
