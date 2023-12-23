import PropTypes from 'prop-types';
import { CounterWrapper } from './style';

const Counter = ({ total, current, isCategory }) => {
  return (
    <CounterWrapper className="counter">
      {isCategory && `${current}/`}
      {total}
    </CounterWrapper>
  );
};

Counter.propTypes = {
  total: PropTypes.number,
  current: PropTypes.number,
  isCategory: PropTypes.bool,
};

export { Counter };
