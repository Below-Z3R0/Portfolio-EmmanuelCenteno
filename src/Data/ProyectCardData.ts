import type { ProyectProps } from "../types/types"
import { ReactIcon, NodeIcon, TypeScriptIcon } from "../Assets/Icons"

export const ProyectCardData: ProyectProps = {
    title: 'Plataforma tipo udemy',
    isrelevant: true,
    txt: 'Creada con React, Supabase, Next.js, Tailwind CSS y Node.JS',
    linkgithub: 'https://www.linkedin.com/in/emmanuel-centeno-3bbab53b1/',
    linklivedemo: 'https://www.linkedin.com/in/emmanuel-centeno-3bbab53b1/',
    imgproyect: 'Udemy-.png',
    tecnologies: [
        {
            name: 'React',
            icon: ReactIcon,
            color: '#61DAFB'
        },
        {
            name: 'Node.js',
            icon: NodeIcon,
            color: '#339933'
        },
        {
            name: 'TypeScript',
            icon: TypeScriptIcon,
            color: '#3178C6'
        }
    ]
}

export const ProyectCardDataPorfolio: ProyectProps = {
    title: 'Port Folio',
    isrelevant: true,
    txt: 'Plataforma web de alto rendimiento diseñada con una arquitectura modular y minimalista. Enfocada en la experiencia de usuario (UX) y la optimización técnica, sirviendo como pieza central de mi ecosistema como desarrollador Full Stack.',
    linkgithub: 'https://github.com/Below-Z3R0/Portfolio-EmmanuelCenteno',
    linklivedemo: 'https://portfolio-emmanuel-centeno-t2a7.vercel.app/',
    imgproyect: 'Portfolio.png',
    tecnologies: [
        {
            name: 'React',
            icon: ReactIcon,
            color: '#61DAFB'
        },
        {
            name: 'Node.js',
            icon: NodeIcon,
            color: '#339933'
        },
        {
            name: 'TypeScript',
            icon: TypeScriptIcon,
            color: '#3178C6'
        }
    ]
}

export const ProyectCardDataSM: ProyectProps = {
    title: 'title prueba',
    txt: 'txt prueba',
    linkgithub: 'https://www.linkedin.com/in/emmanuel-centeno-3bbab53b1/',
    linklivedemo: 'https://www.linkedin.com/in/emmanuel-centeno-3bbab53b1/',
    imgproyect: null,
    tecnologies: [
        {
            name: 'React',
            icon: ReactIcon,
            color: '#61DAFB'
        },
        {
            name: 'Node.js',
            icon: NodeIcon,
            color: '#339933'
        },
        {
            name: 'TypeScript',
            icon: TypeScriptIcon,
            color: '#3178C6'
        }
    ]
}
