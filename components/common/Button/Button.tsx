import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';
import {
  ButtonProps,
  ButtonStyleType,
  ButtonPaddingSizeType,
} from '../../../interfaces';

export const Button: React.FC<ButtonProps> = ({
  children,
  href = '',
  ButtonPaddingSize,
  ButtonStyle,
}) => {
  const ButtonStyleFC = (ButtonStyle: ButtonStyleType) => {
    switch (ButtonStyle) {
      case 'primary':
        return 'bg-primary text-white ';
      case 'secondary':
        return 'bg-white text-primary border border-primary';

      default:
        break;
    }
  };
  const ButtonPaddingFC = (ButtonPaddingSize: ButtonPaddingSizeType) => {
    switch (ButtonPaddingSize) {
      case 'small':
        return '';
      case 'medium':
        return 'py-4 px-7';

      default:
        break;
    }
  };
  return (
    <div>
      {href ? (
        <button
          className={clsx(
            'outline-none focus:outline-none',
            ButtonStyle && ButtonStyleFC(ButtonStyle),
            ButtonPaddingSize && ButtonPaddingFC(ButtonPaddingSize)
          )}
        >
          {children}
        </button>
      ) : (
        <Link href={href}>
          <button
            className={clsx(
              'outline-none focus:outline-none',
              ButtonStyle && ButtonStyleFC(ButtonStyle),
              ButtonPaddingSize && ButtonPaddingFC(ButtonPaddingSize)
            )}
          >
            {children}
          </button>
        </Link>
      )}
    </div>
  );
};
