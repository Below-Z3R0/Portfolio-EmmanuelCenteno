import { Title3, Title4, Paragraph, ProjectCard } from '../components';
import { FadeUp, MiniTitleAnimation } from '../animations/animationsindex';
import type { ProjectsSectionProps } from '../types';

export function ProjectsSection({ translations, projects, language }: ProjectsSectionProps) {
  return (
    <section id='Proyects' className='flex flex-col py-25 gap-10 max-w-241.5 mx-auto px-5 relative'>
      {/* Cabecera de la sección */}
      <div className='flex items-start flex-col gap-4'>
        <MiniTitleAnimation>
          <Title4
            txt={translations.titlesm}
            className='uppercase text-accent tracking-[0.2em] text-[16px] font-normal'
          />
        </MiniTitleAnimation>
        <Title3
          txt={translations.titlelg}
          className='text-main'
        />
        <Paragraph
          className='text-dim max-w-2xl'
          txt={translations.Paragraph}
        />
      </div>

      {/* Grid de Proyectos con FadeUp stagger */}
      <div className='w-full flex flex-wrap qw:flex-row gap-8 flex-col'>
        {projects.map((project, index) => (
          <FadeUp key={`${index}-${language}`} delay={index * 0.15} className="w-full">
            <ProjectCard
              metadata={project.metadata}
              translations={project.translations[language]}
            />
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
