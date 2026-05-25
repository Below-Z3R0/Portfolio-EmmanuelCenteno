import { motion } from 'framer-motion';
import { useLanguage } from './hooks/useLanguague';
import { useState } from 'react';
import { HamburNavIcon } from './assets/Icons';
import { NavData } from './staticdata/dataindex';
import { Button, NavBar, ErrorPage, TecnologiesSection, HeroSection, ContactSection, AboutMeSection, ProjectsSection } from './components/componentsindex';
import { useGeneralData } from './hooks/useGeneralData';
import { useProjectsData } from './hooks/useProjectsData';
import { HomePageSkeleton } from './components/molecules/skeletons/skeletonindex';

const fadeUp = {
  initial: { opacity: 0, y: 100, scale: 0.95 }, 
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport: { once: true, margin: "-15% 0px" }, 
  transition: { 
    type: "spring", 
    stiffness: 100,  
    damping: 12,    
    duration: 0.005 
  }
} as const;

export const revalidate = 3600;

function App() {
  const { language, toggleLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { ProjectsData, isProjctsDataLoading, isProjectsDataError } = useProjectsData();
  const { GeneralData, isGeneralDataLoading, isGeneralDataError } = useGeneralData();

  if (isGeneralDataLoading || isProjctsDataLoading) return <HomePageSkeleton />;
  if (isGeneralDataError || isProjectsDataError || !GeneralData || !ProjectsData) return <ErrorPage />;

  return (
    <div className='text-main min-h-screen font-display'>
      <NavBar NavData={NavData} name={true} classname=' hidden ew:flex' ChangueLanguage={() => toggleLanguage(language === 'es' ? 'en' : 'es')} language={language} />
      
      <nav className='z-1 qw:left-5 qw:right-5 left-2 right-2 max-w-241.5 p-5 mt-5 rounded-2xl mx-auto flex gap-6 items-center justify-between ew:hidden'>
        <h1 className='font-bold tracking-tight'>Emmanuel.Dev</h1>
        <div className='flex fixed w-full justify-end mx-auto pr-10 z-1'>
          <Button
            svg={HamburNavIcon}
            className='size-7 '
            fillcolor='text-main'
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
      </nav>

      {isOpen && (
        <div className='flex justify-end px-5 fixed h-80 w-full z-20 -mt-2.5'>
          <NavBar NavData={NavData} className='flex-col! items-end ' classname='sticky w-30 h-70 m-0! justify-end' classNameTheme='!w-25 mr-8 mt-62!' ChangueLanguage={() => toggleLanguage(language === 'es' ? 'en' : 'es')} language={language} />
        </div>
      )}
      
      <motion.div {...fadeUp}>
        <HeroSection
          translations={GeneralData.herosection.translations[language]}
          metadata={GeneralData.herosection.metadata}
          imageSrc="ImgCV.jpg"
        />
      </motion.div>

      <motion.div {...fadeUp}>
        <TecnologiesSection
          translations={GeneralData.skillssection[language]}
          skills={GeneralData.skillssection.skills}
        />
      </motion.div>

      <motion.div {...fadeUp}>
        <ProjectsSection
          translations={GeneralData.projectssection[language]}
          projects={ProjectsData}
          language={language}
        />
      </motion.div>

      <motion.div {...fadeUp}>
        <AboutMeSection
          translations={GeneralData.aboutmesection[language]}
          imageSrc="ImgCV.jpg"
        />
      </motion.div>

      <motion.div {...fadeUp}>
        <ContactSection
          translations={GeneralData.contactsection[language]}
          contacts={GeneralData.contactsection.Contacts}
          formTranslations={GeneralData.contactsection.Form[language]}
        />
      </motion.div>

      <footer className='py-20 flex flex-col items-center gap-8 px-5 max-w-241.5 mx-auto border-t border-border-subtle/50 mt-20'>
        <nav className='flex gap-8'>
          {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item === 'About' ? 'AboutMe' : item === 'Projects' ? 'Proyects' : item === 'Skills' ? 'Tecnologies' : item}`}
              className='text-dim hover:text-main text-sm transition-colors'
            >
              {item}
            </a>
          ))}
        </nav>
        <div className='flex flex-col items-center gap-2 mt-4'>
          <p className='text-dim text-sm flex items-center gap-2'>
            Built with React and Tailwind
          </p>
          <p className='text-muted text-xs tracking-wider uppercase'>
            Copyright © | Coded by Emmanuel Centeno
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;