import './App.css';
import { useLanguage } from './hooks/useLanguague';
import { useState } from 'react';
import { MailIcon, LinkedInIcon, HamburNav } from './assets/Icons';
import { NavData, FormData, /*ProyectCardDataUdemy,*/ ProyectCardDataSM, ContactsData, TecnologiesData, ProyectCardDataPorfolio, GeneralData } from './index'
import { LinkButton, Title1, Title3, Title4, Button, ProyectCard, NormalPrght, Formulary, TecnologiesCard, NavBar } from './index'

function App() {
  const { language, toggleLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className='text-main min-h-screen font-display selection:bg-accent/30'>
      {/* Nav */}
      <NavBar NavData={NavData} name={true} classname=' hidden ew:flex' ChangueLanguage={() => toggleLanguage(language === 'Spanish' ? 'English' : 'Spanish')} language={language} />
      <nav className='z-1 qw:left-5 qw:right-5 left-2 right-2 max-w-241.5 p-5 mt-5 rounded-2xl mx-auto flex gap-6 items-center justify-between  ew:hidden'>
        <h1 className='font-bold tracking-tight'>Emmanuel.Dev</h1>
        <div className='flex fixed w-full justify-end mx-auto pr-10 z-1'>
          <Button
            svg={HamburNav}
            className='size-7 '
            fillcolor='text-main'
            onClick={() => setIsOpen(isOpen === false ? true : false)}
          />
        </div>

      </nav>
      {isOpen === false
        ? <div className=' hidden'> </div>
        :
        <div className='flex justify-end px-5 fixed h-80 w-full z-20 -mt-2.5'>
          <NavBar NavData={NavData} className='flex-col! items-end ' classname='sticky w-30 h-70 m-0! justify-end' classNameTheme='!w-25 mr-8 mt-62!' ChangueLanguage={() => toggleLanguage(language === 'Spanish' ? 'English' : 'Spanish')} language={language} />
        </div>

      }

      {/* Hero Section */}
      <section id="Home" className='py-50 max-w-241.5 mx-auto'>
        <div className='gap-4 flex flex-col justify-start items-start col h-full '>
          <div className='flex items-center gap-3'>
            <img src='ImgCV.jpg' className='rounded-full size-20 border border-border-subtle object-cover bg-card' />
            <LinkButton className='flex items-center rounded-full bg-accent-soft border border-border-glow h-8 px-4 text-accent text-xs font-semibold' link='https://www.linkedin.com/in/emmanuel-centeno-3bbab53b1/' txt={GeneralData.hero[language].workstatus} />
          </div>
          <Title1 txt={GeneralData.hero[language].Title} className=' mb-5 text-main tracking-tight' />
          <NormalPrght
            className='text-dim leading-relaxed max-w-2xl'
            txt={GeneralData.hero[language].prght1}
          />
          <NormalPrght
            className='text-dim leading-relaxed max-w-2xl'
            txt={GeneralData.hero[language].prght2}
          />

          <nav className='flex gap-4 mt-4'>
            <LinkButton link='#Contact' txt='Contact' svg={MailIcon} fillcolor='text-muted h-6' className='w-auto px-6 h-11 rounded-xl flex flex-row-reverse items-center justify-center gap-2 bg-main text-page font-bold hover:opacity-90 transition-opacity' />
            <LinkButton link='https://www.linkedin.com/in/emmanuel-centeno-3bbab53b1/' txt='LinkedIn' svg={LinkedInIcon} fillcolor='h-6' className='w-auto px-6 h-11 rounded-xl flex flex-row-reverse items-center justify-center gap-2 bg-card border border-border-subtle text-main hover:bg-surface transition-colors' />
          </nav>
        </div>
      </section>

      {/* Tecnologies */}
      <section id='Tecnologies' className='flex flex-col gap-8 max-w-241.5 mx-auto py-20'>
        <div className='flex items-start flex-col gap-4'>
          <Title4 txt={GeneralData.Tecnologies[language].titlesm} className='uppercase text-accent tracking-[0.2em] ' />
          <Title3 txt={GeneralData.Tecnologies[language].titlelg} className='text-main' />
          <NormalPrght className='text-dim' txt={GeneralData.Tecnologies[language].prght} />
        </div>

        {['Frontend', 'Backend', 'DevOps'].map((cat) => (
          <div key={cat} className="flex flex-col items-start gap-6">
            <Title4 txt={cat} className='text-accent border-l-2 border-accent/30 pl-4' />
            <div className='flex flex-row flex-wrap justify-center gap-4 px-4'>
              {TecnologiesData[cat as keyof typeof TecnologiesData].map((skill, index) => (
                <TecnologiesCard key={index} {...skill} cardSize='gap-3' />
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Proyectos */}
      <section id='Proyects' className='flex flex-col py-25 gap-10 max-w-241.5 mx-auto'>
        <div className='flex items-start flex-col gap-4'>
          <Title4 txt={GeneralData.Proyects[language].titlesm} className='text-accent tracking-[0.2em] uppercase' />
          <Title3 txt={GeneralData.Proyects[language].titlelg} className='text-main' />
          <NormalPrght className='text-dim' txt={GeneralData.Proyects[language].prght} />
        </div>
        <div className='w-full flex flex-wrap qw:flex-row gap-8 flex-col'>
          {/*<ProyectCard data={ProyectCardData[language]} />*/}
          <ProyectCard data={ProyectCardDataPorfolio[language]} />
          <ProyectCard data={ProyectCardDataSM[language]} />
          <ProyectCard data={ProyectCardDataSM[language]} />
        </div>
      </section>

      {/* About Me */}
      <section id='AboutMe' className='section flex lg:flex-nowrap lg:flex-row flex-col-reverse flex-wrap max-w-241.5 mx-auto py-32'>
        <div className='wq:max-w[60%] w-full flex items-start flex-col gap-4'>
          <Title4 className='uppercase text-accent tracking-[0.2em]' txt={GeneralData.AboutMe[language].titlesm} />
          <Title3 txt={GeneralData.AboutMe[language].titlelg} className='text-main' />
          <div className='w-full flex items-center justify-center'>
            <img src='ImgCV.jpg' className='lg:hidden block max-w-60 w-full object-cover rounded-2xl mt-10 shadow-lg' />
          </div>
          <NormalPrght className='text-dim leading-relaxed wq:max-w[60%] w-full' txt={GeneralData.AboutMe[language].prght1} />
          <NormalPrght className='text-dim leading-relaxed wq:max-w[60%] w-full' txt={GeneralData.AboutMe[language].prght2} />
        </div>
        <img src='ImgCV.jpg' className='lg:block hidden wq:w-full w-0 max-w-60 object-cover rounded-2xl shadow-lg' />
      </section>

      {/* Contact Form Uniforme */}
      <section id='Contact' className='section flex flex-col gap-4 max-w-241.5 mx-auto py-20 '>
        <div className='rounded-3xl flex qw:flex-row flex-col qw:justify-between gap-10 max-ww:p-0 p-12 bg-card border border-border-subtle shadow-2xl relative overflow-hidden'>
          <div className='absolute -top-24 -right-24 size-64 bg-accent/5 rounded-full blur-3xl'></div>
          <div className='qw:w-[50%] w-full flex flex-col max-ww:px-5 max-ww:pt-5 qw:justify-between justify-center qw:items-start items-center gap-4 relative z-10'>
            <div className='w-full flex flex-col items-start gap-4 pb-10'>
              <Title4 txt={GeneralData.Contact[language].titlesm} className='text-accent tracking-[0.2em] uppercase' />
              <Title3 txt={GeneralData.Contact[language].titlelg} className='text-main' />
              <NormalPrght className='text-dim' txt={GeneralData.Contact[language].prght} />
            </div>

            <div className='flex flex-wrap gap-4'>
              {ContactsData.map((item, index) => (
                <LinkButton className='rounded-xl h-12 w-auto flex flex-row-reverse justify-center items-center px-5 gap-3 bg-surface border border-border-subtle text-main hover:border-accent transition-all ' key={index} svg={item.img} fillcolor='h-6 w-6' link={item.link} txt={item.txt} />
              ))}
            </div>
          </div>

          {/* Formulario Desktop & Mobile */}
          <div className='qw:w-[45%] w-full relative max-ww:px-2 max-ww:pb-2'>
            <Formulary title={language === 'Spanish' ? 'Enviame un mensaje' : 'Send me a mail'} fields={FormData[language]} className='[&>label]:bg-transparent text-main' />
          </div>
        </div>
      </section>

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
  )
}
export default App;