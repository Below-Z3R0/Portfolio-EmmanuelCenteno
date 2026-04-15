import type { /*ReactNode,*/ HTMLInputTypeAttribute, ButtonHTMLAttributes, MouseEventHandler, SVGProps, ComponentType } from "react";

// --- 1. GLOBAL / SHARED TYPES ---
export type Theme = 'Dark' | 'Light' | 'System';
export type Language = 'English' | 'Spanish'

export interface ThemeDataProps {
  themes: Theme[];
}

// --- 2. NAVIGATION & CONTACTS ---
export interface NavProps {
  link: string;
  txt: string;
}

export interface NavDataConfig {
    Spanish: NavProps[];
    English: NavProps[];
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
}

export interface TecnologiesDataConfig {
  [category: string]: TecnologiesConfig[];
}

// --- 4. PROJECTS ---
export interface ProyectProps {
  title: string; 
  txt: string;
  linkgithub: string;
  linklivedemo: string; 
  tecnologies: TecnologiesConfig[];
  imgproyect: string | null;
  isrelevant?: boolean; 
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
  img?: string | null;
  svg?: ComponentType<SVGProps<SVGSVGElement>> | string;
  fillcolor?: string;
  txt?: string | null;
  className?: string;
}