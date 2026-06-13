import { Title3, Title4, Paragraph, TecnologiesCard } from '../components';
import { MiniTitleAnimation, StaggerContainer, StaggerItem } from '../animations/animationsindex';
import type { TecnologiesSectionProps } from '../types';

export function TecnologiesSection({ translations, skills }: TecnologiesSectionProps) {
  const categories = ["Frontend", "Backend", "DevOps"] as const;

  return (
    <section id='Tecnologies' className='flex flex-col gap-10 max-w-241.5 mx-auto py-20 px-5 relative'>
      {/* Cabecera de la sección */}
      <div className='flex items-start flex-col gap-4'>
        <MiniTitleAnimation>
          <Title4 txt={translations.titlesm} className='uppercase text-accent tracking-[0.2em] text-[16px] font-normal' />
        </MiniTitleAnimation>
        <Title3 txt={translations.titlelg} className='text-main' />
        <Paragraph className='text-dim max-w-2xl' txt={translations.Paragraph} />
      </div>

      {/* Listado por categorías con stagger */}
      {categories.map((cat) => (
        <div key={cat} className="flex flex-col items-start gap-6">
          <Title4 txt={cat} className='text-accent border-l-2 border-accent/30 pl-4 text-sm font-semibold' />
          <StaggerContainer className='flex flex-row flex-wrap justify-start gap-4 px-4 w-full'>
            {skills[cat].map((skill, index) => (
              <StaggerItem key={index}>
                <TecnologiesCard {...skill} cardSize='gap-3' />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      ))}
    </section>
  );
}
