import PropTypes from 'prop-types';
import StyledProgressBar from './style';
import { useRef } from 'react';

const ProgressBar = ({ percentage, showText }) => {
  const barRef = useRef(null);

  return (
    <StyledProgressBar ref={barRef} className="progress-bar" percentage={percentage} hasText={!!showText}>
      <div className="bar">
        <div className="inner-bar" style={{ width: `${barRef.current?.clientWidth}px` }}>
          {showText && <span className="text text-bar">{percentage}%</span>}
        </div>
      </div>
      {showText && <span className="text">{percentage}%</span>}
    </StyledProgressBar>
  );
};

ProgressBar.protoTypes = {
  percentage: PropTypes.number,
  showText: PropTypes.bool,
};

export { ProgressBar };
