import { Title3, Title4, Paragraph } from '../componentsindex';
import { MiniTitleAnimation, SlideInLeft, SlideInRight } from '../animations/animationsindex';

interface AboutMeSectionProps {
  translations: {
    titlesm: string;
    titlelg: string;
    Paragraph1: string;
    Paragraph2: string;
  };
  imageSrc?: string;
}

export function AboutMeSection({ translations, imageSrc = 'ImgCV.jpg' }: AboutMeSectionProps) {
  return (
    <section id='AboutMe' className='section flex lg:flex-nowrap lg:flex-row flex-col-reverse flex-wrap max-w-241.5 mx-auto py-32 px-5 relative'>
      <SlideInLeft className='qw:max-w[60%] w-full flex items-start flex-col gap-4'>
        {/* Títulos */}
        <MiniTitleAnimation>
          <Title4
            className='uppercase text-accent tracking-[0.2em] text-[16px] font-normal'
            txt={translations.titlesm}
          />
        </MiniTitleAnimation>
        <Title3
          txt={translations.titlelg}
          className='text-main'
        />

        <div className='w-full flex items-center justify-center'>
          <img
            src={imageSrc}
            className='lg:hidden block max-w-60 w-full object-cover rounded-2xl mt-10 shadow-lg border border-border-subtle'
            alt="Emmanuel Centeno"
            loading="lazy"
          />
        </div>

        {/* Contenido de texto */}
        <Paragraph
          className='text-dim leading-relaxed qw:max-w-160 w-full'
          txt={translations.Paragraph1}
        />
        <Paragraph
          className='text-dim leading-relaxed qw:max-w-160 w-full'
          txt={translations.Paragraph2}
        />
      </SlideInLeft>

      <SlideInRight delay={0.2} className='lg:block lg:w-full w-0 max-w-60'>
        <img
          src={imageSrc}
          className='w-full object-cover rounded-2xl shadow-lg border border-border-subtle'
          alt="Emmanuel Centeno"
          loading="lazy"
        />
      </SlideInRight>
    </section>
  );
}
