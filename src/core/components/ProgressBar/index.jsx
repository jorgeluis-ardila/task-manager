import PropTypes from 'prop-types';
import StyledProgressBar from './style';
import { useRef } from 'react';

const ProgressBar = ({ percentage, showText }) => {
  const barRef = useRef(null);
  const formatedPercentage = percentage === 100 ? 0 : percentage === 0 ? 100 : percentage;

  return (
    <StyledProgressBar ref={barRef} className="progress-bar" percentage={formatedPercentage} hasText={!!showText}>
      <div className="bar bar--back">{showText && <span className="text">{percentage}%</span>}</div>
      <div className="bar bar--front">{showText && <span className="text">{percentage}%</span>}</div>
    </StyledProgressBar>
  );
};

ProgressBar.propTypes = {
  percentage: PropTypes.number,
  showText: PropTypes.bool,
};

export { ProgressBar };
