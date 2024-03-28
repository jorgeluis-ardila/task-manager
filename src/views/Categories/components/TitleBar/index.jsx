import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useModal } from 'providers/context';
import { Counter, IconButton } from 'core';
import { AditionalFilters } from 'core';
import { HeaderWrapper } from './style';

const TitleBar = forwardRef(({ total }, ref) => {
  const { modalActions } = useModal();

  const handleOpenFilters = () => {
    modalActions.open(<AditionalFilters />, 'info');
  };

  return (
    <HeaderWrapper ref={ref}>
      <div className="title-container">
        <h2 title="Tus Tableros">Tus Tableros</h2>
        <Counter total={total} />
      </div>
      <IconButton variant="filter" iconType="filters" className="sort-button" onClick={handleOpenFilters} />
    </HeaderWrapper>
  );
});

TitleBar.displayName = 'TitleBar';
TitleBar.propTypes = {
  total: PropTypes.number,
};

export { TitleBar };
