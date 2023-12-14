import PropTypes from 'prop-types';
import StyledProgressBar from './style';

const ProgressBar = ({ percentage, showText }) => {
  return (
    <StyledProgressBar percentage={percentage} hasText={!!showText}>
      <div className="progress-bar" />
      {showText && <span>{percentage}%</span>}
    </StyledProgressBar>
  );
};

ProgressBar.protoTypes = {
  percentage: PropTypes.number,
};

export { ProgressBar };
