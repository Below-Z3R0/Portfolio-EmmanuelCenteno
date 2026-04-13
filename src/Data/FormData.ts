import type { FormDataConfig } from "../types/types"

export const FormData: FormDataConfig = {
    top: [
        { name: "name", label: "Nombre completo", type: "text", placeholder: "Ingresa tu nombre" },
        { name: "user_email", label: "Direccion de correo", type: "email", placeholder: "Ingresa tu correo" },
        { name: "title", label: "Asunto", type: "text", placeholder: "Asunto" },
    ],
    bottom: { name: "message", label: "Tu mensaje", type: "text", placeholder: "Escribe tu mensaje aquí" },
}