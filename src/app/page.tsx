import SportsSection from '@/components/section/SportsSection';
import HeroSection from '@/components/section/HeroSection';
import type { Metadata } from 'next';
import Description from '@/components/section/Description';
import ScoreboardPage from '@/app/event_winners/page';

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
      <ScoreboardPage />
    </main>
  );
}
