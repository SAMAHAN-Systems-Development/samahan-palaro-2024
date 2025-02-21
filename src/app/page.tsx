import SportsSection from '@/components/section/SportsSection';
import ClosingCeremony from '@/components/ui/ClosingCeremony';
import HeroSection from '@/components/section/HeroSection';
import type { Metadata } from 'next';
import Description from '@/components/section/Description';

export const metadata: Metadata = {
  title: 'SAMAHAN Palaro 2024',
  description: 'The official Samahan Palaro 2024 Website.',
};

export default function Home() {
  return (
    <main>
      {/* add sections here */}
      <HeroSection />
      <Description />
      {/* <ClosingCeremony />
      <SportsSection /> */}
    </main>
  );
}
