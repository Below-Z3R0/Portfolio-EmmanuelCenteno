import { Title3, Title4, Paragraph } from '../componentsindex';

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
    <section id='AboutMe' className='section flex lg:flex-nowrap lg:flex-row flex-col-reverse flex-wrap max-w-241.5 mx-auto py-32 px-5'>
      <div className='qw:max-w[60%] w-full flex items-start flex-col gap-4'>
        {/* Títulos */}
        <Title4 
          className='uppercase text-accent tracking-[0.2em]' 
          txt={translations.titlesm} 
        />
        <Title3 
          txt={translations.titlelg} 
          className='text-main' 
        />

        <div className='w-full flex items-center justify-center'>
          <img 
            src={imageSrc} 
            className='lg:hidden block max-w-60 w-full object-cover rounded-2xl mt-10 shadow-lg' 
            alt="Profile Mobile"
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
      </div>

      <img 
        src={imageSrc} 
        className='lg:block lg:w-full w-0 max-w-60 object-cover rounded-2xl shadow-lg' 
        alt="Profile Desktop"
      />
    </section>
  );
}