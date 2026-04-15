import type { ContactsProps } from '../index'
import { LinkedInIcon, GitHubIcon } from '../assets/Icons'
import type { FormDataConfig } from "../types/types"

interface FormData {
    Spanish: FormDataConfig;
    English: FormDataConfig;
}


export const ContactsData: ContactsProps[] = [
    { img:LinkedInIcon, link: 'https://www.linkedin.com/in/emmanuel-centeno-3bbab53b1/', txt: 'LinkedIn' },
    { img: GitHubIcon, link: 'https://github.com/Below-Z3R0', txt: 'GitHub' },
//    { img: 'favicon.svg', link: 'https://mail.google.com/mail/u/0/?tab=rm&ogbl#sent?projector=1', txt: 'GitHub' },
]

export const FormData: FormData = {
    Spanish: {
        top: [
            { name: "name", label: "Nombre completo", type: "text", placeholder: "Ingresa tu nombre" },
            { name: "user_email", label: "Direccion de correo", type: "email", placeholder: "Ingresa tu correo" },
            { name: "title", label: "Asunto", type: "text", placeholder: "Asunto" },
        ],
        bottom: { name: "message", label: "Tu mensaje", type: "text", placeholder: "Escribe tu mensaje aquí" },
    },
    English: {
        top: [
            { name: "name", label: "Full Name", type: "text", placeholder: "Enter your name" },
            { name: "user_email", label: "Email Address", type: "email", placeholder: "Enter your email" },
            { name: "title", label: "Subject", type: "text", placeholder: "Subject" },
        ],
        bottom: { name: "message", label: "Your Message", type: "text", placeholder: "Write your message here" },
    }
};