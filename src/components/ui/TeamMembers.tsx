import React from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

export const membersBorderVariants = cva(
  [
    'flex justify-center items-center font-jersey10 border-8 text-[5.3125rem] relative py-12 px-10',
  ],
  {
    variants: {
      membersBorderColor: {
        green: 'text-green border-green',
        blue: 'text-blue border-blue',
        white: 'text-white border-white',
        pink: 'text-pink border-pink',
      },
    },
    defaultVariants: {
      membersBorderColor: 'green',
    },
  }
);
export const membersBodyTextVariants = cva(
  ['font-jersey10 text-[1.9375rem] max-xl:text-center'],
  {
    variants: {
      membersBodyTextColor: {
        green: 'text-green',
        blue: 'text-blue',
        white: 'text-white',
        pink: 'text-pink',
      },
    },
    defaultVariants: {
      membersBodyTextColor: 'green',
    },
  }
);
export const membersTitleVariants = cva(
  [
    'px-4 text-[1.9375rem] flex justify-center items-center max-xl:whitespace-nowrap',
  ],
  {
    variants: {
      membersTitleColor: {
        green: 'bg-green',
        blue: 'bg-blue',
        white: 'bg-white',
        pink: 'bg-pink',
      },
      membersTitleTextColor: {
        green: 'text-green',
        blue: 'text-blue',
        white: 'text-white',
        pink: 'text-pink',
      },
    },
    defaultVariants: {
      membersTitleColor: 'green',
      membersTitleTextColor: 'blue',
    },
  }
);

export type Member = {
  role: string;
  name: string;
};

export interface TeamMembersProps
  extends VariantProps<typeof membersBorderVariants>,
    VariantProps<typeof membersBodyTextVariants>,
    VariantProps<typeof membersTitleVariants> {
  group?: string;
  members: Member[];
}

// TODO: Change font size for members

const TeamMembers: React.FC<TeamMembersProps> = ({
  membersBorderColor,
  membersBodyTextColor,
  membersTitleTextColor,
  group,
  members,
}) => {
  return (
    <div className={membersBorderVariants({ membersBorderColor })}>
      <div className="max-xl:hidden absolute top-0 left-6 ">
        <div
          className={membersTitleVariants({
            membersTitleColor: membersBorderColor,
            membersTitleTextColor,
          })}
        >
          MEMBERS
        </div>
      </div>
      <div className="hidden max-xl:block absolute top-0 right-1/2 translate-x-1/2 ">
        <div
          className={membersTitleVariants({
            membersTitleColor: membersBorderColor,
            membersTitleTextColor,
          })}
        >
          {group}
        </div>
      </div>
      {/* <div className={textVariants({ textColor })}>OVERALL MANAGEMENT</div> */}
      <div className="grid grid-cols-2 grid-rows-2 max-xl:flex max-xl:flex-col max-xl:justify-center max-xl:items-center">
        {members.map((value, index) => {
          return (
            <div key={index} className="flex flex-col">
              <p className={membersBodyTextVariants({ membersBodyTextColor })}>
                {value.role}
              </p>
              <p className={membersBodyTextVariants({ membersBodyTextColor })}>
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
