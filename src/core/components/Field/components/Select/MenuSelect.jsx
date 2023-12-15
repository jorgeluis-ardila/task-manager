import { forwardRef } from 'react';
import cn from 'classnames';
import { StyledSelectMenu, StyledSelectMenuItem } from '../style';

const MenuSelect = forwardRef(({ options, styles, onClick, selectedValue }, ref) => {
  return (
    <StyledSelectMenu className="menu-list" ref={ref} style={styles}>
      {options.map(option => (
        <StyledSelectMenuItem
          title={option.label}
          key={option.value}
          className={cn('menu-item', { isSelected: selectedValue === option.value })}
          onClick={() => onClick(option)}
        >
          {option.label}
        </StyledSelectMenuItem>
      ))}
    </StyledSelectMenu>
  );
});

export { MenuSelect };
