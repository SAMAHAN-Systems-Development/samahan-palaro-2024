import TWGSection, { TWGSectionProps } from '@/components/section/TWGSection';
import TeamGroup, { TeamGroupProps } from '@/components/ui/TeamGroup';
import TeamMembers, { TeamMembersProps } from '@/components/ui/TeamMembers';
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
        titleTextColor: 'white',
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
        titleTextColor: 'blue',
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
        titleTextColor: 'green',
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
        titleTextColor: 'white',
        bodyTextColor: 'white',
      },
    },
    {
      section: {
        leftColor: 'green',
        rightColor: 'blue',
      },
      group: {
        borderColor: 'pink',
        textColor: 'blue',
      },
      members: {
        borderColor: 'green',
        titleTextColor: 'pink',
        bodyTextColor: 'white',
      },
    },
    {
      section: {
        leftColor: 'pink',
        rightColor: 'white',
      },
      group: {
        borderColor: 'blue',
        textColor: 'white',
      },
      members: {
        borderColor: 'pink',
        titleTextColor: 'white',
        bodyTextColor: 'blue',
      },
    },
    {
      section: {
        leftColor: 'blue',
        rightColor: 'pink',
      },
      group: {
        borderColor: 'green',
        textColor: 'green',
      },
      members: {
        borderColor: 'white',
        titleTextColor: 'blue',
        bodyTextColor: 'white',
      },
    },
    {
      section: {
        leftColor: 'white',
        rightColor: 'blue',
      },
      group: {
        borderColor: 'blue',
        textColor: 'blue',
      },
      members: {
        borderColor: 'pink',
        titleTextColor: 'green',
        bodyTextColor: 'green',
      },
    },
    {
      section: {
        leftColor: 'pink',
        rightColor: 'green',
      },
      group: {
        borderColor: 'green',
        textColor: 'white',
      },
      members: {
        borderColor: 'blue',
        titleTextColor: 'white',
        bodyTextColor: 'blue',
      },
    },
    {
      section: {
        leftColor: 'green',
        rightColor: 'white',
      },
      group: {
        borderColor: 'blue',
        textColor: 'blue',
      },
      members: {
        borderColor: 'green',
        titleTextColor: 'pink',
        bodyTextColor: 'pink',
      },
    },
    {
      section: {
        leftColor: 'blue',
        rightColor: 'pink',
      },
      group: {
        borderColor: 'white',
        textColor: 'white',
      },
      members: {
        borderColor: 'green',
        titleTextColor: 'blue',
        bodyTextColor: 'white',
      },
    },
    {
      section: {
        leftColor: 'white',
        rightColor: 'green',
      },
      group: {
        borderColor: 'pink',
        textColor: 'pink',
      },
      members: {
        borderColor: 'pink',
        titleTextColor: 'white',
        bodyTextColor: 'blue',
      },
    },
  ];

  return (
    <div className="bg-blue min-h-screen">
      <div className="py-20">
        <h1 className="font-vt323 sm:pr-6 md:pr-8 lg:pr-10 xl:pr-12 text-4xl xsm:text-2xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
          <strong className="flex flex-row items-center justify-center gap-3">
            <div className="mx-10 flex flex-row">
              <Image
                src="/images/sports-picture/Vector.png"
                alt="Gallery Opening Image"
                width={50}
                height={50}
                className="rotate-180 object-contain w-8 sm:w-12 md:w-14 lg:w-18 xl:w-20"
              />
              <Image
                src="/images/sports-picture/Vector.png"
                alt="Gallery Opening Image"
                width={50}
                height={50}
                priority
                className="rotate-180 ml-3 object-contain w-8 sm:w-12 md:w-14 lg:w-18 xl:w-20"
              />
            </div>
            <span className="text-pink">PALARONG</span>{' '}
            <span className="text-green whitespace-nowrap">ATENISTA TWG</span>
            <div className="mx-10 flex flex-row">
              <Image
                src="/images/sports-picture/Vector2.png"
                alt="Gallery Opening Image"
                width={50}
                height={50}
                priority
                className="object-contain mr-3 w-8 sm:w-12 md:w-14 lg:w-18 xl:w-20"
              />
              <Image
                src="/images/sports-picture/Vector2.png"
                alt="Gallery Opening Image"
                width={50}
                height={50}
                className="object-contain w-8 sm:w-12 md:w-14 lg:w-18 xl:w-20"
              />
            </div>
          </strong>
        </h1>
      </div>
      {groups.map((group, index) => {
        const colorNumber = index % colors.length;
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
