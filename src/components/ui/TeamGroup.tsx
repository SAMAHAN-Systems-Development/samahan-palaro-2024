import React from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

export const borderVariants = cva(
  ['flex justify-center items-center border-8 p-10 relative'],
  {
    variants: {
      borderColor: {
        green: 'text-green border-green',
        blue: 'text-blue border-blue',
        white: 'text-white border-white',
        pink: 'text-pink border-pink',
      },
    },
    defaultVariants: {
      borderColor: 'green',
    },
  }
);
export const textVariants = cva(
  ['font-vt323 text-4xl md:text-[max(4.3125rem,2rem)] leading-[4.3125rem]'],
  {
    variants: {
      textColor: {
        green: 'text-green',
        blue: 'text-blue',
        white: 'text-white',
        pink: 'text-pink',
      },
    },
    defaultVariants: {
      textColor: 'green',
    },
  }
);
export const boxVariants = cva(
  ['absolute top-0 left-0 w-[7.6rem] h-[1.5rem]'],
  {
    variants: {
      color: {
        green: 'bg-green',
        blue: 'bg-blue',
        white: 'bg-white',
        pink: 'bg-pink',
      },
    },
    defaultVariants: {
      color: 'green',
    },
  }
);

export interface TeamGroupProps
  extends VariantProps<typeof borderVariants>,
  VariantProps<typeof textVariants> {
  children?: React.ReactNode;
}

const TeamGroup: React.FC<TeamGroupProps> = ({
  borderColor,
  textColor,
  children,
}) => {
  return (
    <div className={borderVariants({ borderColor })}>
      <div className={boxVariants({ color: borderColor })} />
      <p className={textVariants({ textColor })}>{children}</p>
    </div>
  );
};

export default TeamGroup;
