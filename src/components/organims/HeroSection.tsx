import { Title1, Paragraph, LinkButton } from '../componentsindex';
import type { ComponentType, SVGProps } from 'react';

interface HeroSectionProps {
  translations: {
    workstatus: string;
    Title: string;
    Paragraph1: string;
    Paragraph2: string;
    contact: string;
  };
  metadata: {
    mail: string | ComponentType<SVGProps<SVGSVGElement>>;
    linkedin: string | ComponentType<SVGProps<SVGSVGElement>>;
  };
  imageSrc?: string;
}

export function HeroSection({ translations, metadata, imageSrc = 'ImgCV.jpg' }: HeroSectionProps) {
  return (
    <section id="Home" className='py-50 max-w-241.5 mx-auto px-5'>
      <div className='gap-4 flex flex-col justify-start items-start h-full'>
        
        {/* Header: Foto y Status */}
        <div className='flex items-center gap-3'>
          <img 
            src={imageSrc} 
            className='rounded-full size-20 border border-border-subtle object-cover bg-card' 
            alt="Profile"
          />
          <LinkButton 
            className='flex items-center rounded-full bg-accent-soft border border-border-glow h-8 px-4 text-accent text-xs font-semibold' 
            link='https://www.linkedin.com/in/emmanuel-centeno-3bbab53b1/' 
            txt={translations.workstatus} 
          />
        </div>

        {/* Textos Principales */}
        <Title1 
          txt={translations.Title} 
          className='mb-5 text-main tracking-tight' 
        />
        <Paragraph
          className='text-dim leading-relaxed max-w-2xl'
          txt={translations.Paragraph1}
        />
        <Paragraph
          className='text-dim leading-relaxed max-w-2xl'
          txt={translations.Paragraph2}
        />

        {/* Navegación de Contacto Rápido */}
        <nav className='flex gap-4 mt-4'>
          <LinkButton 
            link='#Contact' 
            txt={translations.contact} 
            svg={metadata.mail} 
            fillcolor='text-muted h-6' 
            className='w-auto px-6 h-11 rounded-xl flex flex-row-reverse items-center justify-center gap-2 bg-main text-page font-bold hover:opacity-90 transition-opacity' 
          />
          <LinkButton 
            link='https://www.linkedin.com/in/emmanuel-centeno-3bbab53b1/' 
            txt={translations.contact} 
            svg={metadata.linkedin} 
            fillcolor='h-6' 
            className='w-auto px-6 h-11 rounded-xl flex flex-row-reverse items-center justify-center gap-2 bg-card border border-border-subtle text-main hover:bg-surface transition-colors' 
          />
        </nav>
      </div>
    </section>
  );
}