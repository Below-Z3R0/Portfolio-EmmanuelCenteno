import './App.css';
import type { Theme } from './types/types.ts';
import { useState, useEffect } from 'react';
import { DayAndNightIcon, MailIcon, LinkedInIcon } from './Assets/Icons.tsx';
import { ThemeData, NavData, FormData, ProyectCardData, ProyectCardDataSM, ContactsData, TecnologiesData, ProyectCardDataPorfolio } from './index.ts'
import { LinkButton, Title1, Title3, Title4, Button, ProyectCard, NormalPrght, Formulary, TecnologiesCard } from './index.ts'

function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'Dark' || saved === 'Light') {
      return saved as Theme;
    }
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return systemPrefersDark ? 'Dark' : 'Light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('Dark', 'Light');
    root.classList.add(theme)
    localStorage.setItem('theme', theme);
    root.style.colorScheme = theme.toLowerCase();
  }, [theme]);
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <div className='text-main min-h-screen font-display selection:bg-accent/30'>
      {/* Nav */}
      <nav className='z-20 left-5 right-5 max-w-241.5 p-5 mt-5 rounded-2xl fixed mx-auto flex gap-6 items-center justify-between bg-page/80 backdrop-blur-xl border border-border-subtle shadow-2xl'>
        <h1 className='font-bold tracking-tight'>Emmanuel.Dev</h1>
        <div className='flex gap-4 items-center'>
          {NavData.map((item, index) => (
            <LinkButton key={index} link={item.link} txt={item.txt} className='text-dim hover:text-main transition-colors text-sm font-medium' />
          ))}
          <Button
            svg={DayAndNightIcon}
            className='size-7'
            fillcolor='text-main'
            onClick={() => setIsOpen(isOpen === false ? true : false)}
          />
          {isOpen === false
            ? <div className=' hidden'> </div>
            :
            <div className=' -z-10 w-100 pt-7 pr-6 mx-auto flex fixed items-center justify-end '>
              <div className='w-40 rounded-md p-2 gap-2 flex flex-col items-end bg-page/80 backdrop-blur-xl border border-border-subtle shadow-2xl'>
                {ThemeData.map((cat, index) => (
                  <Button onClick={() => setTheme(cat)} key={index} txt={cat} className='flex items-start h-8 w-full p-1 rounded-md ' />
                ))}
              </div>
            </div>
          }
        </div>
      </nav>

      {/* Hero Section */}
      <section id="Home" className='py-50 px-5 max-w-241.5 mx-auto'>
        <div className='gap-4 flex flex-col justify-start items-start col h-full '>
          <div className='flex items-center gap-3'>
            <img src='ImgCV.jpg' className='rounded-full size-20 border border-border-subtle object-cover bg-card' />
            <LinkButton className='flex items-center rounded-full bg-accent-soft border border-border-glow h-8 px-4 text-accent text-xs font-semibold' link='https://www.linkedin.com/in/emmanuel-centeno-3bbab53b1/' txt='Disponible para trabajar' />
          </div>
          <Title1 txt='Hola! Soy Emmanuel Centeno' className=' text-left mb-5 text-main tracking-tight' />
          <NormalPrght
            className='text-dim leading-relaxed max-w-2xl'
            txt='Apasionado por el desarrollo Full Stack y el diseño UI.
            Me especializo en el ecosistema de JavaScript, trabajando con React, Next.js y Node.js.'
          />
          <NormalPrght
            className='text-dim leading-relaxed max-w-2xl'
            txt='Mi enfoque está en la creación de arquitecturas limpias utilizando PostgreSQL y Supabase,
            siempre buscando aprender nuevas tecnologías para resolver problemas complejos de forma creativa.'
          />

          <nav className='flex gap-4 mt-4'>
            <LinkButton link='#Contact' txt='Contactame' svg={MailIcon} fillcolor='text-muted h-6' className='w-auto px-6 h-11 rounded-xl flex flex-row-reverse items-center justify-center gap-2 bg-main text-page font-bold hover:opacity-90 transition-opacity' />
            <LinkButton link='https://www.linkedin.com/in/emmanuel-centeno-3bbab53b1/' txt='LinkedIn' svg={LinkedInIcon} fillcolor='h-6' className='w-auto px-6 h-11 rounded-xl flex flex-row-reverse items-center justify-center gap-2 bg-card border border-border-subtle text-main hover:bg-surface transition-colors' />
          </nav>
        </div>
      </section>

      {/* Skills */}
      <section id='Tecnologies' className='flex flex-col gap-8 px-5 max-w-241.5 mx-auto py-20'>
        <div className='flex items-start flex-col gap-4'>
          <Title4 txt='Skills' className='uppercase text-accent tracking-[0.2em] ' />
          <Title3 txt='Mi Stack Tecnológico' className='text-main' />
          <NormalPrght className='text-dim' txt='Me especializo en el ecosistema de JavaScript, pero mi enfoque siempre es elegir 
          la herramienta adecuada para crear productos de alto rendimiento y código limpio'/>
        </div>

        {['Frontend', 'Backend', 'DevOps'].map((cat) => (
          <div key={cat} className="flex flex-col items-start gap-6">
            <Title4 txt={cat} className='text-accent border-l-2 border-accent/30 pl-4' />
            <div className='flex flex-row flex-wrap gap-4 px-4'>
              {TecnologiesData[cat as keyof typeof TecnologiesData].map((skill, index) => (
                <TecnologiesCard key={index} {...skill} cardSize='gap-3' />
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Proyectos */}
      <section id='Proyects' className='flex flex-col py-25 gap-10 px-5 max-w-241.5 mx-auto'>
        <div className='flex items-start flex-col gap-4'>
          <Title4 txt='Proyectos' className='text-accent tracking-[0.2em] uppercase' />
          <Title3 txt='Ideas convertidas en código.' className='text-main' />
          <NormalPrght className='text-dim' txt='Una muestra de mi trabajo construyendo aplicaciones Full Stack,
            donde busco el equilibrio entre una arquitectura escalable
            y una interfaz de usuario impecable.'/>
        </div>
        <div className='w-full flex flex-wrap qw:flex-row gap-8 flex-col'>
          <ProyectCard data={ProyectCardData} />
          <ProyectCard data={ProyectCardDataPorfolio} />
          <ProyectCard data={ProyectCardDataSM} />
          <ProyectCard data={ProyectCardDataSM} />
        </div>
      </section>

      {/* About Me */}
      <section id='AboutMe' className='section flex lg:flex-nowrap lg:flex-row flex-col-reverse flex-wrap px-5 max-w-241.5 mx-auto py-32'>
        <div className='wq:max-w[60%] w-full flex items-start flex-col gap-4'>
          <Title4 className='uppercase text-accent tracking-[0.2em]' txt='Sobre mí' />
          <Title3 txt='FullStack en formación' className='text-main' />
          <div className='w-full flex items-center justify-center'>
            <img src='ImgCV.jpg' className='lg:hidden block max-w-60 w-full object-cover rounded-2xl mt-10 shadow-lg' />
          </div>
          <NormalPrght className='text-dim leading-relaxed wq:max-w[60%] w-full' txt='¡Hola! Soy Emmanuel. Me especializo en el ecosistema de JavaScript (React/Node) para construir aplicaciones que no solo funcionen bien, sino que puedan escalar.' />
          <NormalPrght className='text-dim leading-relaxed wq:max-w[60%] w-full' txt='Me encanta el reto de conectar un backend robusto con un diseño que cautive. Por eso, mientras desarrollo mi propio clon de Udemy, sigo perfeccionando mis habilidades en CSS y animaciones. Cuando no estoy programando, me encontrarás dibujando digitalmente, una práctica que mantiene mi creatividad afilada para resolver problemas técnicos de forma innovadora.' />
        </div>
        <img src='ImgCV.jpg' className='lg:block hidden wq:w-full w-0 max-w-60 object-cover rounded-2xl shadow-lg' />
      </section>

      {/* Contact Form Uniforme */}
      <section id='Contact' className='section flex flex-col gap-4 px-5 max-w-241.5 mx-auto py-20'>
        <div className='rounded-3xl flex qw:flex-row flex-col qw:justify-between gap-10 p-12 bg-card border border-border-subtle shadow-2xl relative overflow-hidden'>
          <div className='absolute -top-24 -right-24 size-64 bg-accent/5 rounded-full blur-3xl'></div>

          <div className='qw:w-[50%] w-full flex flex-col qw:justify-between justify-center qw:items-start items-center gap-4 relative z-10'>
            <div className='w-full flex flex-col items-start gap-4 pb-10'>
              <Title4 txt='Contacto' className='text-accent tracking-[0.2em] uppercase' />
              <Title3 txt='Hablemos' className='text-main' />
              <NormalPrght className='text-dim' txt='Busco colaborar en proyectos donde pueda aportar valor en desarrollo web y backend, con total flexibilidad para adaptarme a nuevas tecnologías.' />
            </div>

            <div className='flex flex-wrap gap-4'>
              {ContactsData.map((item, index) => (
                <LinkButton className='rounded-xl h-12 w-auto flex flex-row-reverse justify-center items-center px-5 gap-3 bg-surface border border-border-subtle text-main hover:border-accent transition-all ' key={index} svg={item.img} fillcolor='h-6 w-6' link={item.link} txt={item.txt} />
              ))}
            </div>
          </div>

          {/* Formulario Desktop & Mobile */}
          <div className='qw:w-[45%] w-full relative z-10'>
            <Formulary title="Envíame un correo" fields={FormData} className='[&>label]:bg-transparent text-main'/>
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