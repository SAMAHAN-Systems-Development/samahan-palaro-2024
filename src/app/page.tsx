import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Samahan Palaro 2024',
  description: 'The official Samahan Palaro 2024 Website.',
};

export default function Home() {
  return <main>
    {/* add sections here */}
    {/* For testing of fonts */}
    <div className='mt-10 justify-center items-center flex flex-col'>
      <div className="font-actay text-center">
        <h1 className="text-2xl">Actay Font</h1>
        <p>The quick brown fox jumps over the lazy dog.</p>
      </div>
      <div className="font-chakra-petch text-center">
        <h1 className="text-2xl">Chakra Petch Font</h1>
        <p>The quick brown fox jumps over the lazy dog.</p>
      </div>
    </div>

  </main>;
}
