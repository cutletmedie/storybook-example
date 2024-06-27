import React, {ButtonHTMLAttributes} from 'react';
import './Button.css';
import {Icon} from "../Icon/Icon";
import {IconToken} from "../Icon/Icon.tokens";

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * What type is it?
   */
  localType?: 'default' | 'dropdown' | 'icon';
  /**
   * Button contents
   */
  label?: string;
  icon?: IconToken;
  iconSize?: number;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  localType = 'default',
  backgroundColor,
  label,
  icon,
  iconSize = 16,
  ...props
}: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) => {

  if (localType === 'dropdown') {
    return (
      <button
          type="button"
          className={['storybook-button', `storybook-button--${localType}`].join(' ')}
          style={{ backgroundColor }}
          {...props}
      >
        <span className={'storybook-button-text'}>{label}</span>
        <Icon icon={'chevron'}/>
      </button>
    )
  }

  if (localType === 'icon') {
    return (
        <button
            type="button"
            className={['storybook-button', `storybook-button--${localType}`].join(' ')}
            style={{ backgroundColor }}
            {...props}
        >
          <Icon icon={icon} color={'black'} width={iconSize} height={iconSize}/>
        </button>
    );
  }
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';

  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${localType}`, mode].join(' ')}
      {...props}
    >
      <span className={'storybook-button-text'}>{label}</span>
    </button>
  );
};
