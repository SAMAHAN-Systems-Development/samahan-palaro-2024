import { VariantProps, cva } from 'class-variance-authority';
import React from 'react';

export const leftSideVariants = cva(['flex justify-center items-center p-10'], {
  variants: {
    leftColor: {
      green: 'bg-green',
      blue: 'bg-blue',
      white: 'bg-white',
      pink: 'bg-pink',
    },
  },
  defaultVariants: {
    leftColor: 'green',
  },
});

export const rightSideVariants = cva(['flex justify-center items-center p-6'], {
  variants: {
    rightColor: {
      green: 'bg-green',
      blue: 'bg-blue',
      white: 'bg-white',
      pink: 'bg-pink',
    },
  },
  defaultVariants: {
    rightColor: 'pink',
  },
});

export interface TWGSectionProps
  extends VariantProps<typeof leftSideVariants>,
    VariantProps<typeof rightSideVariants> {
  rightSideChild?: React.ReactNode;
  leftSideChild?: React.ReactNode;
}

const TWGSection: React.FC<TWGSectionProps> = ({
  rightSideChild,
  leftSideChild,
  leftColor,
  rightColor,
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr,1.5fr] gap-4 min-h-[25vh] h-auto">
      <div
        className={`${leftSideVariants({ leftColor })} p-6 md:p-10 flex flex-col justify-center`}
      >
        {leftSideChild}
      </div>
      <div
        className={`${rightSideVariants({ rightColor })} p-6 md:p-10 flex flex-col justify-center`}
      >
        {rightSideChild}
      </div>
    </div>
  );
};

export default TWGSection;
