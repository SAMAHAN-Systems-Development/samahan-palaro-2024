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
  ['absolute top-0 left-6 w-[7.6rem] text-[1.9375rem] flex justify-center'],
  {
    variants: {
      color: {
        green: 'bg-green',
        blue: 'bg-blue',
        white: 'bg-white',
        pink: 'bg-pink',
      },
      boxTextColor: {
        green: 'text-green',
        blue: 'text-blue',
        white: 'text-white',
        pink: 'text-pink',
      },
    },
    defaultVariants: {
      color: 'green',
      boxTextColor: 'blue',
    },
  }
);

export type Member = {
  role: string;
  name: string;
};

export interface TeamMembersProps
  extends VariantProps<typeof borderVariants>,
    VariantProps<typeof textVariants>,
    VariantProps<typeof boxVariants> {
  members: Member[];
}

// TODO: Change font size for members

const TeamMembers: React.FC<TeamMembersProps> = ({
  color,
  textColor,
  boxTextColor,
  members,
}) => {
  return (
    <div className={borderVariants({ color })}>
      <div className={boxVariants({ color, boxTextColor })}>Members</div>
      {/* <div className={textVariants({ textColor })}>OVERALL MANAGEMENT</div> */}
      <div className="flex flex-wrap">
        {members.map((value) => {
          return (
            <div>
              <p>{value.role}</p>
              <p>{value.name}</p>
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
