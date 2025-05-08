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
      <div className="py-10 sm:py-16 md:py-20">
        <div className="flex flex-row items-center justify-center w-full">
          {/* Left arrows container */}
          <div className="flex flex-row items-center justify-end space-x-2 flex-1">
            <Image
              src="/images/sports-picture/Vector.png"
              alt="Left arrow"
              width={50}
              height={50}
              className="rotate-180 object-contain w-6 sm:w-8 md:w-10 lg:w-12 xl:w-16"
            />
            <Image
              src="/images/sports-picture/Vector.png"
              alt="Left arrow"
              width={50}
              height={50}
              priority
              className="rotate-180 object-contain w-6 sm:w-8 md:w-10 lg:w-12 xl:w-16"
            />
          </div>

          {/* Center text */}
          <h1 className="font-vt323 text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold whitespace-nowrap px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10">
            <span className="text-pink">PALARONG</span>{' '}
            <span className="text-green">ATENISTA TWG</span>
          </h1>

          {/* Right arrows container */}
          <div className="flex flex-row items-center justify-start space-x-2 flex-1">
            <Image
              src="/images/sports-picture/Vector2.png"
              alt="Right arrow"
              width={50}
              height={50}
              priority
              className="object-contain w-6 sm:w-8 md:w-10 lg:w-12 xl:w-16"
            />
            <Image
              src="/images/sports-picture/Vector2.png"
              alt="Right arrow"
              width={50}
              height={50}
              className="object-contain w-6 sm:w-8 md:w-10 lg:w-12 xl:w-16"
            />
          </div>
        </div>
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
