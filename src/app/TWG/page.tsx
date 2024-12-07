import TWGSection, { TWGSectionProps } from '@/components/section/TWGSection';
import TeamGroup, { TeamGroupProps } from '@/components/ui/TeamGroup';
import TeamMembers, { TeamMembersProps } from '@/components/ui/TeamMembers';
import { Member } from '@/types/member.type';
import { TWGGroup } from '@/types/twgGroup.type';
import { getTWGGroups } from '@/utils/getTWGGroups';
import { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';

export const metadata: Metadata = {
  title: 'TWG Page',
  description: '',
};

type TWGSectionColors = {
  section: TWGSectionProps;
  group: TeamGroupProps;
  members: TeamMembersProps;
};

const TWG = async () => {
  const groups = await getTWGGroups();
  const colors: TWGSectionColors[] = [
    {
      section: {
        leftColor: 'pink',
        rightColor: 'blue',
      },
      group: {
        borderColor: 'white',
        textColor: 'white',
      },
      members: {
        borderColor: 'pink',
        titleColor: 'white',
        bodyTextColor: 'white',
      },
    },
    {
      section: {
        leftColor: 'green',
        rightColor: 'pink',
      },
      group: {
        borderColor: 'blue',
        textColor: 'blue',
      },
      members: {
        borderColor: 'green',
        titleColor: 'blue',
        bodyTextColor: 'white',
      },
    },
    {
      section: {
        leftColor: 'blue',
        rightColor: 'white',
      },
      group: {
        borderColor: 'pink',
        textColor: 'white',
      },
      members: {
        borderColor: 'blue',
        titleColor: 'pink',
        bodyTextColor: 'blue',
      },
    },
    {
      section: {
        leftColor: 'white',
        rightColor: 'pink',
      },
      group: {
        borderColor: 'green',
        textColor: 'blue',
      },
      members: {
        borderColor: 'blue',
        titleColor: 'white',
        bodyTextColor: 'white',
      },
    },
  ];
  return (
    <div className="bg-blue min-h-screen">
      <h1 className="font-jersey10 sm:pr-6 md:pr-8 lg:pr-10 xl:pr-12 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
        <strong className="flex flex-row items-center justify-center gap-3">
          <span className="flex flex-row">
            <Image
              height={'52'}
              width={'52'}
              alt="arrow"
              className="rotate-180"
              src={'/images/sports-picture/Vector.png'}
            />
            <Image
              height={'52'}
              width={'52'}
              alt="arrow"
              className="rotate-180"
              src={'/images/sports-picture/Vector.png'}
            />
          </span>
          <span className="text-pink">PALARONG</span>{' '}
          <span className="text-green">ATENISTA TWG</span>
          <span className="flex flex-row">
            <Image
              height={'52'}
              width={'52'}
              alt="arrow"
              src={'/images/sports-picture/Vector2.png'}
            />
            <Image
              height={'52'}
              width={'52'}
              alt="arrow"
              src={'/images/sports-picture/Vector2.png'}
            />
          </span>
        </strong>
      </h1>
      <div className="min-h-screen bg-blue" />
      {groups.map((group, index) => {
        const colorNumber = index % 4;
        return (
          <TWGSection
            key={index}
            {...colors[colorNumber].section}
            leftSideChild={
              <TeamGroup {...colors[colorNumber].group}>{group.name}</TeamGroup>
            }
            rightSideChild={
              <TeamMembers
                {...colors[colorNumber].members}
                members={group.members}
              />
            }
          />
        );
      })}
    </div>
  );
};

export default TWG;
