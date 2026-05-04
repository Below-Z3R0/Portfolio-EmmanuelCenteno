import { Title3, Title4, Paragraph, TecnologiesCard } from '../componentsindex';
import type { TecnologiesConfig } from '../componentstypes';

interface TecnologiesSectionProps {
  translations: {
    titlesm: string;
    titlelg: string;
    Paragraph: string;
  };
  skills: {
    Frontend: TecnologiesConfig[];
    Backend: TecnologiesConfig[];
    DevOps: TecnologiesConfig[];
  };
}

export function TecnologiesSection({ translations, skills }: TecnologiesSectionProps) {
  const categories = ["Frontend", "Backend", "DevOps"] as const;

  return (
    <section id='Tecnologies' className='flex flex-col gap-8 max-w-241.5 mx-auto py-20 px-5'>
      {/* Cabecera de la sección */}
      <div className='flex items-start flex-col gap-4'>
        <Title4 txt={translations.titlesm} className='uppercase text-accent tracking-[0.2em]' />
        <Title3 txt={translations.titlelg} className='text-main' />
        <Paragraph className='text-dim' txt={translations.Paragraph} />
      </div>

      {/* Listado por categorías */}
      {categories.map((cat) => (
        <div key={cat} className="flex flex-col items-start gap-6">
          <Title4 txt={cat} className='text-accent border-l-2 border-accent/30 pl-4' />
          <div className='flex flex-row flex-wrap justify-center gap-4 px-4'>
            {skills[cat].map((skill, index) => (
              <TecnologiesCard key={index} {...skill} cardSize='gap-3' />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}