import PropTypes from 'prop-types';
import cn from 'classnames';
import { StatusWrapper } from './style';

const StatusFlag = ({ isCompleted, isExpired }) => {
  return (
    <StatusWrapper
      className={cn('status-field', {
        completed: isCompleted,
        expired: isExpired && !isCompleted,
      })}
    >
      {isCompleted ? 'Completada' : isExpired ? 'Expirada' : 'En Progreso'}
    </StatusWrapper>
  );
};

StatusFlag.propTypes = {
  isCompleted: PropTypes.bool,
  isExpired: PropTypes.bool,
};

export { StatusFlag };
