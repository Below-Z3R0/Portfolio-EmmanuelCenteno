import type { NavDataConfig } from '../components/types'

export const NavData: NavDataConfig = {
    es: [
        { link: "#Home", txt: "Home" },
        { link: "#Tecnologies", txt: "Tecnologías" },
        { link: "#Proyects", txt: "Proyectos" },
        { link: "#AboutMe", txt: "Sobre mí" },
        { link: "#Contact", txt: "Contacto" },
    ],
    en: [
        { link: "#Home", txt: "Home" },
        { link: "#Tecnologies", txt: "Tecnologies" },
        { link: "#Proyects", txt: "Proyects" },
        { link: "#AboutMe", txt: "About me" },
        { link: "#Contact", txt: "Contact" },
    ],
};

// Labels locales para los badges de ProjectCard.
// NO vienen de Supabase — son UI-only y estáticos.
export const ProjectBadgeLabels = {
    es: {
        featured: '⭐ Proyecto destacado',
        inConstruction: '🚧 En construcción',
    },
    en: {
        featured: '⭐ Featured project',
        inConstruction: '🚧 Under construction',
    },
} as const;
