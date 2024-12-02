import { VariantProps, cva } from 'class-variance-authority';
import React from 'react';
import TeamMembers, {
  Member,
  TeamMembersProps,
  membersBodyTextVariants,
  membersBorderVariants,
  membersTitleVariants,
} from '../ui/TeamMembers';
import TeamGroup, {
  TeamGroupProps,
  groupBorderVariants,
  groupTextVariants,
} from '../ui/TeamGroup';

export const leftSideVariants = cva(
  ['flex justify-center items-center p-10 max-xl:hidden'],
  {
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
  }
);
export const rightSideVariants = cva(
  ['flex justify-center items-center p-6 h-full'],
  {
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
  }
);

export interface TWGSectionProps
  extends VariantProps<typeof leftSideVariants>,
    TeamGroupProps,
    TeamMembersProps,
    VariantProps<typeof rightSideVariants> {
  teamGroup: string;
}

const TWGSection: React.FC<TWGSectionProps> = ({
  groupTextColor,
  teamGroup,
  groupBorderColor,
  membersBorderColor,
  membersTitleTextColor,
  membersBodyTextColor,
  members,
  leftColor,
  rightColor,
}) => {
  return (
    <div className="grid grid-cols-[minmax(0,1fr),minmax(0,1.5fr)] max-xl:block h-screen">
      <div className={leftSideVariants({ leftColor })}>
        <TeamGroup
          groupTextColor={groupTextColor}
          groupBorderColor={groupBorderColor}
        >
          {teamGroup}
        </TeamGroup>
      </div>
      <div className={rightSideVariants({ rightColor })}>
        <TeamMembers
          group={teamGroup}
          membersBodyTextColor={membersBodyTextColor}
          membersBorderColor={membersBorderColor}
          membersTitleTextColor={membersTitleTextColor}
          members={members}
        />
      </div>
    </div>
  );
};

export default TWGSection;

{
  /* <TWGSection
  leftColor={'green'}
  leftSide={
    <TeamGroup textColor={'blue'} color={'blue'}>
      Overall Management
    </TeamGroup>
  }
  rightColor={'pink'}
  rightSide={
    <TeamMembers
      borderColor={'green'}
      titleTextColor={'blue'}
      bodyTextColor={'white'}
      members={[
        { role: 'Overall Event Director', name: 'Aliya Medida' },
        {
          role: 'Deputy Head for Sporting Events',
          name: 'Ferryl Ken Ganhinhin',
        },
        { role: 'Overall Event Head', name: 'Andy Judd Lumain' },
        {
          role: 'Head for Correspondence',
          name: 'Patricia Amor Estrada',
        },
      ]}
    />
  }
/>; */
}
