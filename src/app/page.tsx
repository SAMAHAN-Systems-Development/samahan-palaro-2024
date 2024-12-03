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
      <HeroSection />
      <ClosingCeremony />
      <SportsSection />
    </main>
  );
}
