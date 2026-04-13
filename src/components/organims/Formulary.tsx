import { Button, Title4 } from "../../index"
import type { FormularyProps } from "../../types/types"
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export function Formulary({ title, fields, className, classNamelabel, classNameinput }: FormularyProps) {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        const SERVICE_ID = 'service_6glywta';
        const TEMPLATE_ID = 'template_8vxufpe';
        const PUBLIC_KEY = 'GgJWejzk_8eNitB69';

        if (form.current) {
            emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
                .then(() => {
                    alert("¡Mensaje enviado con éxito!");
                    form.current?.reset();
                }, (error) => {
                    console.log("Error...", error.text);
                });
        }
    };

    return (
        <form ref={form} onSubmit={sendEmail} className={`${className} rounded-3xl size-full flex flex-col p-[5%] bg-card border border-border-subtle items-start shadow-2xl`}>
            <Title4 txt={title} className="pb-[2%] text-main font-bold tracking-tight" />

            {fields.top.map((field, index) => (
                <label key={index} className={`${classNamelabel} w-full rounded-xl flex flex-col items-start mb-[2%] text-sm font-medium text-dim gap-2`}>
                    {field.label}
                    <input
                        required
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        className={`${classNameinput} w-full rounded-md flex p-[2%] bg-surface border border-border-subtle text-main placeholder:text-muted focus:border-accent outline-none transition-all`}
                    />
                </label>
            ))}

            <label className='w-full flex flex-col items-start gap-2 text-sm font-medium text-dim'>
                {fields.bottom.label}
                <textarea
                    required
                    name={fields.bottom.name}
                    placeholder={fields.bottom.placeholder}
                    className='w-full rounded-xl p-4 bg-surface border border-border-subtle text-main focus:border-accent outline-none min-h-40 transition-colors resize-none'
                />
            </label>
            <div className="w-full">
                <Button
                    txt="Enviar"
                    type="submit"
                    className="w-7/12 p-[2%] mt-[3%] rounded-md bg-accent text-main font-bold hover:opacity-90 transition-opacity shadow-glow-v"
                />
            </div>
        </form>
    )
}