import PropTypes from 'prop-types';
import { IconButton } from 'core';
import { StatusFlag } from '..';
import { HeaderWrapper } from './style';

const TitleBar = ({ title, isCompleted, isExpired, onEdit }) => {
  return (
    <>
      <HeaderWrapper>
        <div className="options-container">
          <StatusFlag isCompleted={isCompleted} isExpired={isExpired} />
          <IconButton iconType="edit" className="edit-button" onClick={onEdit} />
        </div>
        <h2 title={title}>{title}</h2>
      </HeaderWrapper>
    </>
  );
};

TitleBar.propTypes = {
  title: PropTypes.string,
  isCompleted: PropTypes.bool,
  isExpired: PropTypes.bool,
  onEdit: PropTypes.func,
};

export { TitleBar };
