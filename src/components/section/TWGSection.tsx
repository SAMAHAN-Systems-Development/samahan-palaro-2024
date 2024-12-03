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
    rightColor: 'green',
  },
});

export interface TWGSectionProps
  extends VariantProps<typeof leftSideVariants>,
    VariantProps<typeof rightSideVariants> {
  rightSideChild: React.ReactNode;
  leftSideChild: React.ReactNode;
}

const TWGSection: React.FC<TWGSectionProps> = ({
  rightSideChild,
  leftSideChild,
  leftColor,
  rightColor,
}) => {
  return (
    <div className="grid grid-cols-[minmax(0,1fr),minmax(0,1.5fr)] max-xl:flex max-xl:flex-col h-screen max-xl:h-auto">
      <div className={leftSideVariants({ leftColor })}>{leftSideChild}</div>
      <div className={rightSideVariants({ rightColor })}>{rightSideChild}</div>
    </div>
  );
};

export default TWGSection;

//   <TWGSection
//   leftColor={'green'}
//   groupBorderColor={'blue'}
//   groupTextColor={'blue'}
//   teamGroup="OVERALL MANAGEMENT"
//   rightColor={'pink'}
//   membersBorderColor={'green'}
//   membersTitleColor={'blue'}
//   membersBodyTextColor={'white'}
//   members={[
//     { role: 'Overall Event Director', name: 'Aliya Medida' },
//     {
//       role: 'Deputy Head for Sporting Events',
//       name: 'Ferryl Ken Ganhinhin',
//     },
//     { role: 'Overall Event Head', name: 'Andy Judd Lumain' },
//     {
//       role: 'Head for Correspondence',
//       name: 'Patricia Amor Estrada',
//     },
//   ]}
// />
