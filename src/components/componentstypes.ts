import type { /*ReactNode,*/ HTMLInputTypeAttribute, ButtonHTMLAttributes, MouseEventHandler, SVGProps, ComponentType } from "react";
import { z } from 'zod';
import { MetadataSchema } from '../schema/projectschema/projects.schema';

// --- 1. GLOBAL / SHARED TYPES ---
export type Theme = 'sark' | 'light' | 'system';
export type Language = 'en' | 'es'

export interface ThemeDataProps {
  themes: Theme[];
}

// --- 2. NAVIGATION & CONTACTS ---
export interface NavProps {
  link: string;
  txt: string;
}

export interface NavDataConfig {
    es: NavProps[];
    en: NavProps[];
}

export interface ContactsProps extends NavProps {
  img: string | ComponentType<SVGProps<SVGSVGElement>>; // Hereda id, link y txt de NavProps
}

// --- 3. TECHNOLOGIES (Skills) ---
export interface TecnologiesConfig {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  color?: string; 
  name?: string;
  bar?: boolean;
  cardSize?: string; 
  imgSize?: string;
  description?: string;
}

export interface SkillsDataConfig {
  [category: string]: TecnologiesConfig[];
}


// Define la estructura de UNA sola traducción
export interface ProjectTranslation {
  txt: string;
  tecnologies: {
    icon: any; 
    name: string;
    color: string;
    description: string;
  }[];
}

// Ahora define ProjectProps indicando que 'translations' tiene ambos idiomas
export interface ProjectProps {
  metadata: z.infer<typeof MetadataSchema>;
  translations: {
    en: ProjectTranslation;
    es: ProjectTranslation;
  };
}

// --- 5. FORMULARY & INPUTS ---
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
//  children?: ReactNode; 
}

// --- 6. INTERACTIVE ELEMENTS (Buttons) ---
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
  children?: React.ReactNode;
}