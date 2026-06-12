import { useLanguage } from './hooks/useLanguague';
import { useState } from 'react';
import { HamburNavIcon } from './assets/Icons';
import { NavData } from './staticdata/dataindex';
import {
  Button,
  NavBar,
  ErrorPage,
  TecnologiesSection,
  HeroSection,
  ContactSection,
  AboutMeSection,
  ProjectsSection,
  BackgroundFX,
} from './components/componentsindex';
import { FadeUp } from './components/animations/animationsindex';
import { useGeneralData } from './hooks/useGeneralData';
import { useProjectsData } from './hooks/useProjectsData';
import { HomePageSkeleton } from './components/skeletons/skeletonindex';

export const revalidate = 3600;

function App() {
  const { language, toggleLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { ProjectsData, isProjctsDataLoading, isProjectsDataError } = useProjectsData();
  const { GeneralData, isGeneralDataLoading, isGeneralDataError } = useGeneralData();

  if (isGeneralDataLoading || isProjctsDataLoading) return <HomePageSkeleton />;
  if (isGeneralDataError || isProjectsDataError || !GeneralData || !ProjectsData) return <ErrorPage />;

  const footerContent = GeneralData.footersection[language];

  return (
    <div className='text-main min-h-screen font-display relative'>
      {/* Background decorativo — glows + grid de puntos */}
      <BackgroundFX />

      {/* Skip link — accesibilidad de teclado */}
      <a href="#main-content" className="skip-link">
        {language === 'es' ? 'Saltar al contenido principal' : 'Skip to main content'}
      </a>

      <header>
        <nav aria-label="Navegación principal">
          <NavBar NavData={NavData} name={true} classname=' hidden ew:flex' ChangueLanguage={() => toggleLanguage(language === 'es' ? 'en' : 'es')} language={language} />
        </nav>

        <nav aria-label="Navegación móvil" className='z-1 qw:left-5 qw:right-5 left-2 right-2 max-w-241.5 p-5 mt-5 rounded-2xl mx-auto flex gap-6 items-center justify-between ew:hidden'>
          <h1 className='font-bold tracking-tight'>Emmanuel.Dev</h1>
          <div className='flex fixed w-full justify-end mx-auto pr-10 z-1'>
            <Button
              svg={HamburNavIcon}
              className='size-7 '
              fillcolor='text-main'
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={isOpen}
            />
          </div>
        </nav>
      </header>

      {isOpen && (
        <div className='flex justify-end px-5 fixed h-80 w-full z-20 -mt-2.5'>
          <NavBar NavData={NavData} className='flex-col! items-end ' classname='sticky w-30 h-70 m-0! justify-end' classNameTheme='!w-25 mr-8 mt-62!' ChangueLanguage={() => toggleLanguage(language === 'es' ? 'en' : 'es')} language={language} />
        </div>
      )}

      <main id="main-content">
        <FadeUp>
          <HeroSection
            translations={GeneralData.herosection.translations[language]}
            metadata={GeneralData.herosection.metadata}
            imageSrc="ImgCV.jpg"
          />
        </FadeUp>

        <FadeUp>
          <TecnologiesSection
            translations={GeneralData.skillssection[language]}
            skills={GeneralData.skillssection.skills}
          />
        </FadeUp>

        <FadeUp>
          <ProjectsSection
            translations={GeneralData.projectssection[language]}
            projects={ProjectsData}
            language={language}
          />
        </FadeUp>

        <FadeUp>
          <AboutMeSection
            translations={GeneralData.aboutmesection[language]}
            imageSrc="ImgCV.jpg"
          />
        </FadeUp>

        <FadeUp>
          <ContactSection
            translations={GeneralData.contactsection[language]}
            contacts={GeneralData.contactsection.Contacts}
            formTranslations={GeneralData.contactsection.Form[language]}
          />
        </FadeUp>
      </main>

      <footer className='py-20 flex flex-col items-center gap-8 px-5 max-w-241.5 mx-auto border-t border-border-subtle/50 mt-20'>
        <nav aria-label="Navegación del pie de página" className='flex flex-wrap justify-center gap-6'>
          {[
            { id: 'about', href: '#AboutMe', label: footerContent.navLinks.about },
            { id: 'skills', href: '#Tecnologies', label: footerContent.navLinks.skills },
            { id: 'projects', href: '#Proyects', label: footerContent.navLinks.projects },
            { id: 'contact', href: '#Contact', label: footerContent.navLinks.contact },
          ].map((item) => (
            <a
              key={item.id}
              href={item.href}
              className='text-dim hover:text-accent text-sm transition-colors'
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className='flex flex-col items-center gap-2 mt-4'>
          <p className='text-dim text-sm flex items-center gap-2'>
            {footerContent.builtWith}
          </p>
          <p className='text-muted text-xs tracking-wider uppercase'>
            © {new Date().getFullYear()} · {footerContent.copyright}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
