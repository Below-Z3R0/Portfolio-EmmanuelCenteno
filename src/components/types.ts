import type {
  HTMLInputTypeAttribute,
  ButtonHTMLAttributes,
  MouseEventHandler,
  SVGProps,
  ComponentType,
  ReactNode,
} from 'react';
import { z } from 'zod';
import { MetadataSchema } from '../schema/projectschema/projects.schema';

// ============================================================
// 1. SHARED / GLOBAL TYPES
// ============================================================
export type Theme = 'dark' | 'light' | 'system';
export type Language = 'en' | 'es';

// ============================================================
// 2. NAVIGATION & CONTACTS
// ============================================================
export interface NavProps {
  link: string;
  txt: string;
}

export interface NavDataConfig {
  es: NavProps[];
  en: NavProps[];
}

export interface ContactsProps extends NavProps {
  img: string | ComponentType<SVGProps<SVGSVGElement>>;
}

// ============================================================
// 3. PROJECTS
// ============================================================
export interface ProjectTranslation {
  txt: string;
  tecnologies: {
    icon: ComponentType<SVGProps<SVGSVGElement>>;
    name: string;
    color: string;
    description: string;
  }[];
}

export interface ProjectProps {
  metadata: z.infer<typeof MetadataSchema>;
  translations: {
    en: ProjectTranslation;
    es: ProjectTranslation;
  };
}

// ============================================================
// 4. TECHNOLOGIES (SKILLS)
// ============================================================
export interface TecnologiesConfig {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  color?: string;
  name?: string;
  bar?: boolean;
  cardSize?: string;
  imgSize?: string;
  description?: string;
}

// ============================================================
// 5. FORMULARY & INPUTS
// ============================================================
export interface FieldConfig {
  name: string;
  label: string;
  type: HTMLInputTypeAttribute;
  placeholder: string;
}

export interface FormDataConfig {
  top: FieldConfig[];
  bottom: FieldConfig;
}

export interface FormularyProps {
  title: string;
  fields: FormDataConfig;
  className?: string;
  classNamelabel?: string;
  classNameinput?: string;
}

export type FormStatus = 'idle' | 'loading' | 'success' | 'error';

// ============================================================
// 6. INTERACTIVE ELEMENTS (BUTTONS)
// ============================================================
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  link?: string;
  alt?: string;
  img?: string | undefined;
  svg?: ComponentType<SVGProps<SVGSVGElement>> | string;
  fillcolor?: string;
  txt?: string | null;
  className?: string;
  classNameImg?: string;
  children?: ReactNode;
}

// ============================================================
// 7. MODAL MESSAGES
// ============================================================
export interface SuccessMessageProps {
  show: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
  autoCloseMs?: number;
}

export interface ErrorMessageProps {
  show: boolean;
  onClose: () => void;
  onRetry?: () => void;
  title?: string;
  message?: string;
}

// ============================================================
// 8. CARDS
// ============================================================
export interface ProjectCardProps {
  metadata: z.infer<typeof MetadataSchema>;
  translations: ProjectTranslation;
  labels: {
    featured: string;
    inConstruction: string;
  };
  index?: number;
}

// ============================================================
// 9. SECTIONS (ORGANISMS)
// ============================================================
export interface HeroSectionProps {
  translations: {
    workstatus: string;
    Title: string;
    Paragraph1: string;
    Paragraph2: string;
    contact: string;
    linkedin: string;
  };
  metadata: {
    mail: string | ComponentType<SVGProps<SVGSVGElement>>;
    linkedin: string | ComponentType<SVGProps<SVGSVGElement>>;
  };
  imageSrc?: string;
}

export interface TecnologiesSectionProps {
  translations: {
    titlesm: string;
    titlelg: string;
    Paragraph: string;
  };
  skills: {
    Frontend: TecnologiesConfig[];
    Backend: TecnologiesConfig[];
    DevOps: TecnologiesConfig[];
  };
}

export interface ProjectsSectionProps {
  translations: {
    titlesm: string;
    titlelg: string;
    Paragraph: string;
  };
  projects: ProjectProps[];
  language: Language;
  labels: {
    featured: string;
    inConstruction: string;
  };
}

export interface AboutMeSectionProps {
  translations: {
    titlesm: string;
    titlelg: string;
    Paragraph1: string;
    Paragraph2: string;
  };
  imageSrc?: string;
}

export interface ContactSectionProps {
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

export interface ErrorStateProps {
  message?: string;
  onRetry?: () => void;
}

// ============================================================
// 10. NAVBAR
// ============================================================
export interface NavBarProps {
  className?: string;
  classname?: string;
  classNameTheme?: string;
  NavData: NavDataConfig;
  name?: boolean;
  ChangueLanguage: () => void;
  language: Language;
}

// ============================================================
// 11. ANIMATIONS
// ============================================================
export interface AnimationProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export interface SlideProps extends AnimationProps {
  x?: number;
}

export interface PopProps extends AnimationProps {
  scale?: number;
}
