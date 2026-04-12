import type { ReactNode, HTMLInputTypeAttribute, ButtonHTMLAttributes } from "react";

export interface FormularyProps {
  title: string;
  fields: FieldConfig[];
  className?: string;
  classNamelabel?: string; 
  classNameinput?: string;
  children?: ReactNode; 
};

export interface FieldConfig {
  id: number;
  name: string;
  label: string;
  type: HTMLInputTypeAttribute;
  placeholder: string;
};

export interface TecnologiesConfig {
  name?: string;
  icon: string;
  bar?: boolean;
  color?: string; 
  cardSize?: string; 
  imgSize?: string;
}

export interface ProyectProps {
    title: string; 
    isrelevant?: boolean; 
    txt: string;
    linkgithub: string;
    linklivedemo: string; 
    tecnologies: TecnologiesConfig[];
    imgproyect: string | null;
};


export interface NavProps {
  id: number;
  link: string;
  txt: string;
}

export interface ContactsProps extends NavProps {
  img: string;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  link?: string;
  alt?: string;
  img?: string | null;
  txt?: string | null;
  className?: string;
};

export type Theme = 'dark' | 'light'; 