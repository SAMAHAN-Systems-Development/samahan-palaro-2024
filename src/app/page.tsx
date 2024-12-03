// import HeroSection from '@/components/ui/HeroSection';
import SportsSection from '@/components/section/SportsSection';
import ClosingCeremony from '@/components/ui/ClosingCeremony';
import HeroSection from '@/components/section/HeroSection';
import type { Metadata } from 'next';
import TWGSection from '@/components/section/TWGSection';
import TeamMembers from '@/components/ui/TeamMembers';
import TeamGroup from '@/components/ui/TeamGroup';

export const metadata: Metadata = {
  title: 'SAMAHAN Palaro 2024',
  description: 'The official Samahan Palaro 2024 Website.',
};

export default function Home() {
  return (
    <main>
      {/* add sections here */}
      <TWGSection
        leftColor={'green'}
        leftSideChild={
          <TeamGroup borderColor={'blue'} textColor={'blue'}>
            OVERALL MANAGEMENT
          </TeamGroup>
        }
        rightColor={'pink'}
        rightSideChild={
          <TeamMembers
            borderColor={'green'}
            titleColor={'blue'}
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
      />
      <HeroSection />
      <ClosingCeremony />
      <SportsSection />
    </main>
  );
}
