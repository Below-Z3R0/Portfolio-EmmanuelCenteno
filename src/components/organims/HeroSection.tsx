import { Title1, Paragraph, LinkButton } from '../components';
import { PopIn, Pulse, StaggerContainer, StaggerItem } from '../animations/animationsindex';
import type { HeroSectionProps } from '../types';

export function HeroSection({ translations, metadata, imageSrc = 'ImgCV.jpg' }: HeroSectionProps) {
  return (
    <section id="Home" className='qw:py-50 max-w-241.5 mx-auto px-5 relative'>
      <StaggerContainer className='gap-4 flex flex-col justify-start items-start h-full'>
        {/* Header: Foto y Status */}
        <StaggerItem>
          <div className='flex items-center gap-3'>
            <img
              src={imageSrc}
              className='rounded-full size-20 border-2 border-border-subtle object-cover bg-card ring-2 ring-accent/10'
              alt="Foto de perfil de Emmanuel Centeno"
              loading="eager"
            />
            <PopIn delay={0.3}>
              <LinkButton
                className='group flex items-center gap-2 rounded-full bg-accent-soft border border-border-glow h-8 pl-3 pr-4 text-accent text-xs font-semibold transition-all hover:bg-accent-soft/80'
                link='https://www.linkedin.com/in/emmanuel-centeno-3bbab53b1/'
                txt={translations.workstatus}
              >
                <Pulse>
                  <span className='size-2 rounded-full bg-accent' />
                </Pulse>
              </LinkButton>
            </PopIn>
          </div>
        </StaggerItem>

        {/* Textos Principales */}
        <StaggerItem>
          <Title1
            txt={translations.Title}
            className='mb-5 text-main tracking-tight'
          />
        </StaggerItem>
        <StaggerItem>
          <Paragraph
            className='text-dim leading-relaxed max-w-2xl'
            txt={translations.Paragraph1}
          />
        </StaggerItem>
        <StaggerItem>
          <Paragraph
            className='text-dim leading-relaxed max-w-2xl'
            txt={translations.Paragraph2}
          />
        </StaggerItem>

        {/* Navegación de Contacto Rápido */}
        <StaggerItem>
          <nav className='flex gap-4 mt-4'>
            <LinkButton
              link='#Contact'
              txt={translations.contact}
              svg={metadata.mail}
              fillcolor='text-page h-5 w-5'
              className='group w-auto px-6 h-11 rounded-xl flex flex-row-reverse items-center justify-center gap-2 bg-accent text-page font-bold hover:opacity-90 transition-all hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]'
            />
            <LinkButton
              link='https://www.linkedin.com/in/emmanuel-centeno-3bbab53b1/'
              txt={translations.linkedin}
              svg={metadata.linkedin}
              fillcolor='h-5 w-5'
              className='w-auto px-6 h-11 rounded-xl flex flex-row-reverse items-center justify-center gap-2 bg-card border border-border-subtle text-main hover:bg-surface hover:border-accent transition-all'
            />
          </nav>
        </StaggerItem>
      </StaggerContainer>
    </section>
  );
}
