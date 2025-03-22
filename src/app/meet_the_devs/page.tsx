import Link from 'next/link';
import React from 'react';
import Card from '../../components/ui/Card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Meet the Developers | SAMAHAN Palaro 2024',
  description: 'Meet the developers behind the SAMAHAN Palaro 2024 website.',
};

interface Developer {
  name: string;
  position: string;
  imageUrl: string;
}

const MeetTheDevs = () => {
  const projectManager: Developer = {
    name: 'Jan Patrick Matayabas',
    position: 'Project Manager',
    imageUrl: '/images/dev-pictures/matayabas.jpg',
  };

  const teamHeads: Developer[] = [
    {
      name: 'Francis Rhaey Casas',
      position: 'DevOps Engineer',
      imageUrl: '/images/dev-pictures/casas.jpg',
    },
    {
      name: 'Jiyo Seth Valmoria',
      position: 'QA Engineer',
      imageUrl: '/images/dev-pictures/valmoria.jpg',
    },
    {
      name: 'Angelli Alkuino',
      position: 'UI/UX Head',
      imageUrl: '/images/dev-pictures/alkuino.jpg',
    },
    {
      name: 'Karl Justin Natividad',
      position: 'UI/UX Developer',
      imageUrl: '/images/dev-pictures/natividad.jpg',
    },
    {
      name: 'Paolo Luis Ramirez',
      position: 'Frontend Head',
      imageUrl: '/images/dev-pictures/ramirez.jpg',
    },
    {
      name: 'Ivan Sam Wabina',
      position: 'Backend Head',
      imageUrl: '/images/dev-pictures/wabina.jpg',
    },
  ];

  const developers: Developer[] = [
    // First row of developers (4)
    {
      name: 'Nica Zoe Dable',
      position: 'Frontend Developer',
      imageUrl: '/images/dev-pictures/dable.jpg',
    },
    {
      name: 'Mariel Mabano',
      position: 'Frontend Developer',
      imageUrl: '/images/dev-pictures/mabano.jpg',
    },
    {
      name: 'Ram Christian Nacar',
      position: 'Frontend Developer',
      imageUrl: '/images/dev-pictures/nacar.jpg',
    },
    {
      name: 'Loeejee Miguel Lawas Dulaugon',
      position: 'Frontend Developer',
      imageUrl: '/images/dev-pictures/dulaugon.jpg',
    },
    // Second row of developers (4)
    {
      name: 'Mae Angela Espera',
      position: 'Frontend Developer',
      imageUrl: '/images/dev-pictures/espera.jpg',
    },
    {
      name: 'John Kyle Lampa',
      position: 'Frontend Developer',
      imageUrl: '/images/dev-pictures/lampa.jpg',
    },
    {
      name: 'Kervi Asombrado',
      position: 'Frontend Developer',
      imageUrl: '/images/dev-pictures/asombrado.jpg',
    },
    {
      name: 'Marc Linnus Vales',
      position: 'Frontend Developer',
      imageUrl: '/images/dev-pictures/vales.jpg',
    },
  ];

  return (
    <div className="xsm:px-20 sm:pt-32 text-center flex flex-col items-center justify-center font-chakrapetch mb-40">
      <h1 className="xl:text-2xl lg:text-2xl md:text-2xl xsm:text-[1.04169rem] font-semibold text-3xl">
        Meet the Developers
      </h1>
      <p className="text-xl mt-7">
        Made possible by the
        <Link
          href="https://www.facebook.com/SAMAHANSysDev"
          className="hover:text-pink"
        >
          <strong> SAMAHAN Systems Development Team</strong>
        </Link>
      </p>

      {/* Project Manager Section */}
      <div className="mt-12 flex justify-center">
        <Card
          name={projectManager.name}
          position={projectManager.position}
          imageUrl={projectManager.imageUrl}
        />
      </div>

      {/* Team Heads Section */}
      <div className="mt-12 flex flex-col gap-8">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {teamHeads.slice(0, 2).map((head, index) => (
            <Card
              key={`head-1-${index}`}
              name={head.name}
              position={head.position}
              imageUrl={head.imageUrl}
            />
          ))}
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {teamHeads.slice(2, 4).map((head, index) => (
            <Card
              key={`head-2-${index}`}
              name={head.name}
              position={head.position}
              imageUrl={head.imageUrl}
            />
          ))}
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {teamHeads.slice(4, 6).map((head, index) => (
            <Card
              key={`head-3-${index}`}
              name={head.name}
              position={head.position}
              imageUrl={head.imageUrl}
            />
          ))}
        </div>
      </div>

      {/* Developers Section - Updated for consistent 2-column layout at medium screens */}
      <div className="mt-12  max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 justify-items-center">
          {developers.map((dev, index) => (
            <Card
              key={`dev-${index}`}
              name={dev.name}
              position={dev.position}
              imageUrl={dev.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeetTheDevs;
