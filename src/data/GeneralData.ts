// --- TIPADOS ---
import type { Language, NavDataConfig } from '../types/types'


interface HeroContent {
    workstatus: string;
    Title: string;
    prght1: string;
    prght2: string;
}

interface SectionContent {
    titlesm: string;
    titlelg: string;
    prght?: string;
    prght1?: string;
    prght2?: string;
}

type TranslationBlock<T> = {
    [key in Language]: T;
};

interface GeneralDataConfig {
    hero: TranslationBlock<HeroContent>;
    Tecnologies: TranslationBlock<SectionContent>;
    Proyects: TranslationBlock<SectionContent>;
    AboutMe: TranslationBlock<SectionContent>;
    Contact: TranslationBlock<SectionContent>;
}

// --- DATOS Y TRADUCCIONES ---

export const GeneralData: GeneralDataConfig = {
    hero: {
        Spanish: {
            workstatus: 'Disponible para trabajar',
            Title: 'Hola! Soy Emmanuel Centeno',
            prght1: 'Apasionado por el desarrollo Full Stack y el diseño UI. Me especializo en el ecosistema de JavaScript, trabajando con React, Next.js y Node.js.',
            prght2: 'Mi enfoque está en la creación de arquitecturas limpias utilizando PostgreSQL y Supabase, siempre buscando aprender nuevas tecnologías para resolver problemas complejos de forma creativa.',
        },
        English: {
            workstatus: 'Available for work',
            Title: "Hi! I'm Emmanuel Centeno",
            prght1: 'Passionate about Full Stack development and UI design. I specialize in the JavaScript ecosystem, working with React, Next.js, and Node.js.',
            prght2: 'My focus is on creating clean architectures using PostgreSQL and Supabase, always looking to learn new technologies to solve complex problems creatively.',
        },
    },
    Tecnologies: {
        Spanish: {
            titlesm: 'Skills',
            titlelg: 'Mi Stack Tecnológico',
            prght: 'Me especializo en el ecosistema de JavaScript, pero mi enfoque siempre es elegir la herramienta adecuada para crear productos de alto rendimiento y código limpio',
        },
        English: {
            titlesm: 'Skills',
            titlelg: 'My Tech Stack',
            prght: 'I specialize in the JavaScript ecosystem, but my focus is always on choosing the right tool to create high-performance products and clean code.',
        },
    },
    Proyects: {
        Spanish: {
            titlesm: 'Proyectos',
            titlelg: 'Ideas convertidas en código.',
            prght: 'Una muestra de mi trabajo construyendo aplicaciones Full Stack, donde busco el equilibrio entre una arquitectura escalable y una interfaz de usuario impecable.',
        },
        English: {
            titlesm: 'Projects',
            titlelg: 'Ideas turned into code.',
            prght: 'A showcase of my work building Full Stack applications, where I seek the balance between scalable architecture and flawless user interface.',
        },
    },
    AboutMe: {
        Spanish: {
            titlesm: 'Sobre mí',
            titlelg: 'FullStack en formación',
            prght1: '¡Hola! Soy Emmanuel. Me especializo en el ecosistema de JavaScript (React/Node) para construir aplicaciones que no solo funcionen bien, sino que puedan escalar.',
            prght2: 'Me encanta el reto de conectar un backend robusto con un diseño que cautive. Por eso, mientras desarrollo mi propio clon de Udemy, sigo perfeccionando mis habilidades en CSS y animaciones. Cuando no estoy programando, me encontrarás dibujando digitalmente, una práctica que mantiene mi creatividad afilada para resolver problemas técnicos de forma innovadora.',
        },
        English: {
            titlesm: 'About me',
            titlelg: 'FullStack in training',
            prght1: "Hi! I'm Emmanuel. I specialize in the JavaScript ecosystem (React/Node) to build applications that not only work well but can also scale.",
            prght2: "I love the challenge of connecting a robust backend with a captivating design. That's why, while developing my own Udemy clone, I continue to perfect my CSS and animation skills. When I'm not coding, you'll find me digital drawing, a practice that keeps my creativity sharp to solve technical problems innovatively.",
        },
    },
    Contact: {
        Spanish: {
            titlesm: 'Contacto',
            titlelg: 'Hablemos',
            prght: 'Busco colaborar en proyectos donde pueda aportar valor en desarrollo web y backend, con total flexibilidad para adaptarme a nuevas tecnologías.',
        },
        English: {
            titlesm: 'Contact',
            titlelg: "Let's talk",
            prght: 'I am looking to collaborate on projects where I can provide value in web and backend development, with total flexibility to adapt to new technologies.',
        },
    },
};

export const NavData: NavDataConfig = {
    Spanish: [
        { link: "#Home", txt: "Home" },
        { link: "#Tecnologies", txt: "Tecnologías " },
        { link: "#Proyects", txt: "Proyectos" },
        //    {id:4, link: "#Proyects", txt: "Experience"},
        { link: "#AboutMe", txt: "Sobre mí" },
        { link: "#Contact", txt: "Contacto" },
    ],
    English: [
        { link: "#Home", txt: "Home" },
        { link: "#Tecnologies", txt: "Tecnologies " },
        { link: "#Proyects", txt: "Proyects" },
        //    {id:4, link: "#Proyects", txt: "Experience"},
        { link: "#AboutMe", txt: "About me" },
        { link: "#Contact", txt: "Contact" },
    ],
};