import React from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import { Member } from '@/types/member.type';

export const borderVariants = cva(
  [
    'flex justify-center items-center font-jersey10 border-8 text-[5.3125rem] relative ',
  ],
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
export const bodyTextVariants = cva(
  ['font-jersey10 text-[1.9375rem] max-xl:text-center'],
  {
    variants: {
      bodyTextColor: {
        green: 'text-green',
        blue: 'text-blue',
        white: 'text-white',
        pink: 'text-pink',
      },
    },
    defaultVariants: {
      bodyTextColor: 'white',
    },
  }
);
export const titleVariants = cva(
  [
    'px-4 text-[1.9375rem] flex justify-center items-center max-xl:whitespace-nowrap',
  ],
  {
    variants: {
      titleColor: {
        green: 'bg-green',
        blue: 'bg-blue',
        white: 'bg-white',
        pink: 'bg-pink',
      },
      titleTextColor: {
        green: 'text-green',
        blue: 'text-blue',
        white: 'text-white',
        pink: 'text-pink',
      },
    },
    defaultVariants: {
      titleColor: 'green',
      titleTextColor: 'blue',
    },
  }
);

export interface TeamMembersProps
  extends VariantProps<typeof borderVariants>,
    VariantProps<typeof bodyTextVariants>,
    VariantProps<typeof titleVariants> {
  members?: Member[];
}

const TeamMembers: React.FC<TeamMembersProps> = ({
  borderColor,
  bodyTextColor,
  titleTextColor,
  members,
}) => {
  return (
    <div className={borderVariants({ borderColor })}>
      <div className="absolute top-0 left-6 ">
        <div
          className={titleVariants({
            titleColor: borderColor,
            titleTextColor,
          })}
        >
          MEMBERS
        </div>
      </div>
      {/* <div className={textVariants({ textColor })}>OVERALL MANAGEMENT</div> */}
      <div className="min-h-[348px] gap-4 py-12 px-10 grid grid-cols-2 grid-rows-2 h-full items-center">
        {members?.map((value, index) => {
          return (
            <div key={index} className="leading-8 ">
              <p className={bodyTextVariants({ bodyTextColor })}>
                {value.role}
              </p>
              <p className={bodyTextVariants({ bodyTextColor })}>
                {value.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TeamMembers;

{
  /* <TeamGroup />
<TeamMembers
  members={[
    { role: 'Overall Event Director', name: 'Aliya Medida' },
    {
      role: 'Deputy Head for Sporting Events',
      name: 'Ferryl Ken Ganhinhin',
    },
    { role: 'Overall Event Head', name: 'Andy Judd Lumain' },
    { role: 'Head for Correspondence', name: 'Patricia Amor Estrada' },
  ]}
/> */
}
