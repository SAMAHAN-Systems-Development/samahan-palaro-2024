import React from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

export const borderVariants = cva(
  [
    'flex justify-center items-center font-jersey10 border-8 text-[5.3125rem] relative',
  ],
  {
    variants: {
      color: {
        green: 'text-green border-green',
        blue: 'text-blue border-blue',
        white: 'text-white border-white',
        pink: 'text-pink border-pink',
      },
    },
    defaultVariants: {
      color: 'green',
    },
  }
);
export const textVariants = cva(['font-jersey10 text-[5.3125rem]'], {
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
});
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
    VariantProps<typeof textVariants> {}

const TeamGroup: React.FC<TeamGroupProps> = ({ color, textColor }) => {
  return (
    <div className={borderVariants({ color })}>
      <div className={boxVariants({ color })} />
      <p className={textVariants({ textColor })}>OVERALL MANAGEMENT</p>
    </div>
  );
};

export default TeamGroup;
