// import HeroSection from '@/components/ui/HeroSection';
import HeroSection from '@/components/ui/HeroSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Samahan Palaro 2024',
  description: 'The official Samahan Palaro 2024 Website.',
};

export default function Home() {
  return (
    <main>
      {/* add sections here */}
      <HeroSection />
    </main>
  );
}
