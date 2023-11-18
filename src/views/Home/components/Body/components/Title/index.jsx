import PropTypes from 'prop-types';
import StyledTitleContainer from './style';
import { useStore } from '../../../../../../providers/context';
import cn from 'classnames';

const Title = ({ data }) => {
  const { data: categories } = useStore();

  return (
    <StyledTitleContainer>
      <p title={data?.name ?? 'Tus Tableros'}>{data?.name ?? 'Tus Tableros'}</p>
      <span className={cn('counter', { 'inner-category': !!data?.name })}>
        {data ? `${data?.completedTasks}/${data?.totalTasks}` : categories.length}
      </span>
    </StyledTitleContainer>
  );
};

Title.propTypes = {
  data: PropTypes.object,
};

export { Title };
