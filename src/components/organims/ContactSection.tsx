import { Title3, Title4, Paragraph, LinkButton, Formulary } from '../componentsindex';
import type { ContactsProps } from '../componentstypes';

interface ContactSectionProps {
  translations: {
    titlesm: string;
    titlelg: string;
    Paragraph: string;
  };
  contacts: ContactsProps[];
  formTranslations: {
    title: string;
    top: any[];
    bottom: any;
  };
}

export function ContactSection({ translations, contacts, formTranslations }: ContactSectionProps) {
  return (
    <section id='Contact' className='section flex flex-col gap-4 max-w-241.5 mx-auto py-20 px-5'>
      <div className='rounded-3xl flex qw:flex-row flex-col qw:justify-between gap-10 max-ww:p-0 p-12 bg-card border border-border-subtle shadow-2xl relative overflow-hidden'>

        <div className='absolute -top-24 -right-24 size-64 bg-accent/5 rounded-full blur-3xl'></div>
        
        <div className='qw:w-[50%] w-full flex flex-col max-ww:px-5 max-ww:pt-5 qw:justify-between justify-center qw:items-start items-center gap-4 relative z-10'>
          <div className='w-full flex flex-col items-start gap-4 pb-10'>
            <Title4 
              txt={translations.titlesm} 
              className='text-accent tracking-[0.2em] uppercase' 
            />
            <Title3 
              txt={translations.titlelg} 
              className='text-main' 
            />
            <Paragraph 
              className='text-dim' 
              txt={translations.Paragraph} 
            />
          </div>

          <div className='flex flex-wrap gap-4'>
            {contacts.map((item, index) => (
              <LinkButton 
                key={index}
                className='rounded-xl h-12 w-auto flex flex-row-reverse justify-center items-center px-5 gap-3 bg-surface border border-border-subtle text-main hover:border-accent transition-all' 
                svg={item.img} 
                fillcolor='h-6 w-6' 
                link={item.link} 
                txt={item.txt} 
              />
            ))}
          </div>
        </div>

        {/* Columna del Formulario */}
        <div className='qw:w-[45%] w-full relative max-ww:px-2 max-ww:pb-2'>
          <Formulary 
            title={formTranslations.title} 
            fields={formTranslations} 
            className='[&>label]:bg-transparent text-main' 
          />
        </div>
      </div>
    </section>
  );
}