import type { TecnologiesDataConfig } from '../index';
import { GitHubIcon, GitIcon, HTML5Icon, FigmaIcon, NodeIcon, PostGresSQLIcon, ReactIcon, SupaBaseIcon, TailwindIcon, TypeScriptIcon } from '../Assets/Icons';
export const TecnologiesData: TecnologiesDataConfig = {
    Frontend: [
        {
            name: 'React',
            icon: ReactIcon,
            color: '#61DAFB',
        },
        {
            name: 'TypeScript',
            icon: TypeScriptIcon,
            color: '#3178C6',
        },
        {
            name: 'Tailwind CSS',
            icon: TailwindIcon,
            color: '#06B6D4',
        },
        {
            name: 'Figma',
            icon: FigmaIcon,
        },
        {
            name: 'HTML5',
            icon: HTML5Icon,
        },
    ],
    Backend: [
        {
            name: 'Node.js',
            icon: NodeIcon,
            color: '#339933',
        },
        {
            name: 'PostgresSQL',
            icon: PostGresSQLIcon,
            color: '#4169E1',
        },
        {
            name: 'Supabase',
            icon: SupaBaseIcon,
            color: '#3ECF8E',
        },
    ],
    DevOps: [
        {
            name: 'GitHub',
            icon: GitHubIcon,
            color: '#181616',
        },
        {
            name: 'Git',
            icon: GitIcon,
            color: '#F05032',
        },
        //        {
        //            name: 'Docker',
        //            icon: 'Docker.svg',
        //            color: '#2496ED',
        //        },
    ],
};