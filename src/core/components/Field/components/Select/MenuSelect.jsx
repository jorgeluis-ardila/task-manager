import { forwardRef } from 'react';
import cn from 'classnames';
import { StyledSelectMenu, StyledSelectMenuItem } from '../style';

const MenuSelect = forwardRef(({ options, styles, onClick, selectedValue }, ref) => {
  return (
    <StyledSelectMenu ref={ref} style={styles}>
      {options.map(option => (
        <StyledSelectMenuItem
          title={option.label}
          key={option.value}
          className={cn({ isSelected: selectedValue === option.value })}
          onClick={() => onClick(option)}
        >
          {option.label}
        </StyledSelectMenuItem>
      ))}
    </StyledSelectMenu>
  );
});

export { MenuSelect };
