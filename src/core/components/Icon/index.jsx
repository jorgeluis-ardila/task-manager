import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import IconStyled from './style';
import iconNames from './iconsList';

const Icon = ({ type, className }) => {
  const IconSVG = IconStyled(iconNames[type]);
  return <IconSVG className={cn('icon', className)} />;
};

Icon.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
};

export { Icon };
