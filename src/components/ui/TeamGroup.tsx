import React from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

export const groupBorderVariants = cva(
  ['flex justify-center items-center border-8 p-10 relative max-xl:hidden'],
  {
    variants: {
      groupBorderColor: {
        green: 'text-green border-green',
        blue: 'text-blue border-blue',
        white: 'text-white border-white',
        pink: 'text-pink border-pink',
      },
    },
    defaultVariants: {
      groupBorderColor: 'green',
    },
  }
);
export const groupTextVariants = cva(
  ['font-jersey10 text-[max(4.3125rem,2rem)] leading-[4.3125rem]'],
  {
    variants: {
      groupTextColor: {
        green: 'text-green',
        blue: 'text-blue',
        white: 'text-white',
        pink: 'text-pink',
      },
    },
    defaultVariants: {
      groupTextColor: 'green',
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
  extends VariantProps<typeof groupBorderVariants>,
    VariantProps<typeof groupTextVariants> {
  children?: React.ReactNode;
}

const TeamGroup: React.FC<TeamGroupProps> = ({
  groupBorderColor,
  groupTextColor,
  children,
}) => {
  return (
    <div className={groupBorderVariants({ groupBorderColor })}>
      <div className={boxVariants({ color: groupBorderColor })} />
      <p className={groupTextVariants({ groupTextColor })}>{children}</p>
    </div>
  );
};

export default TeamGroup;
