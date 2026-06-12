import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button, Title4, SuccessMessage, ErrorMessage } from '../componentsindex';
import { LoadingDots } from '../animations/animationsindex';
import type { FormularyProps } from '../componentstypes';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export function Formulary({ title, fields, className, classNamelabel, classNameinput }: FormularyProps) {
    const form = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<FormStatus>('idle');
    const [errorMsg, setErrorMsg] = useState<string>('');

    const handleCloseSuccess = () => {
        setStatus('idle');
    };

    const handleCloseError = () => {
        setStatus('idle');
    };

    const handleRetry = () => {
        setStatus('idle');
        setErrorMsg('');
    };

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        if (status === 'loading') return;

        setStatus('loading');

        const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (form.current) {
            emailjs
                .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
                .then(
                    () => {
                        setStatus('success');
                        form.current?.reset();
                    },
                    (error) => {
                        setErrorMsg(error?.text || 'Error desconocido al enviar el mensaje.');
                        setStatus('error');
                    }
                );
        }
    };

    const isLoading = status === 'loading';

    return (
        <>
            <form
                ref={form}
                onSubmit={sendEmail}
                className={`${className} rounded-3xl size-full flex flex-col p-[5%] bg-card border border-border-subtle items-start shadow-2xl relative overflow-hidden`}
            >
                {/* Glow decorativo sutil */}
                <div
                    className="absolute -top-20 -right-20 size-60 rounded-full opacity-20 blur-3xl pointer-events-none"
                    style={{
                        background:
                            'radial-gradient(circle, var(--glow-accent) 0%, transparent 70%)',
                    }}
                />

                <div className="relative w-full">
                    <Title4 txt={title} className="pb-[2%] text-main font-bold tracking-tight text-lg" />

                    {fields.top.map((field, index) => (
                        <label
                            key={index}
                            className={`${classNamelabel} w-full rounded-xl flex flex-col items-start mb-[2%] text-sm font-medium text-dim gap-2`}
                        >
                            {field.label}
                            <input
                                required
                                type={field.type}
                                name={field.name}
                                placeholder={field.placeholder}
                                disabled={isLoading}
                                className={`${classNameinput} w-full rounded-md flex p-[2%] bg-surface border border-border-subtle text-main placeholder:text-muted focus:border-accent outline-none transition-all disabled:opacity-50`}
                            />
                        </label>
                    ))}

                    <label className="w-full flex flex-col items-start gap-2 text-sm font-medium text-dim">
                        {fields.bottom.label}
                        <textarea
                            required
                            name={fields.bottom.name}
                            placeholder={fields.bottom.placeholder}
                            disabled={isLoading}
                            className="w-full rounded-xl p-4 bg-surface border border-border-subtle text-main focus:border-accent outline-none min-h-40 transition-colors resize-none disabled:opacity-50"
                        />
                    </label>

                    <div className="w-full">
                        <Button
                            type="submit"
                            disabled={isLoading}
                            className={`w-7/12 p-[2%] mt-[3%] rounded-md bg-accent text-page font-bold transition-all inline-flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(139,92,246,0.2)] ${
                                isLoading
                                    ? 'opacity-70 cursor-not-allowed'
                                    : 'hover:opacity-90 hover:shadow-[0_0_30px_rgba(139,92,246,0.4)]'
                            }`}
                        >
                            {isLoading ? (
                                <>
                                    <span>Enviando</span>
                                    <LoadingDots />
                                </>
                            ) : (
                                <span>Enviar</span>
                            )}
                        </Button>
                    </div>
                </div>
            </form>

            {/* Mensaje de éxito animado */}
            <SuccessMessage
                show={status === 'success'}
                onClose={handleCloseSuccess}
            />

            {/* Mensaje de error animado */}
            <ErrorMessage
                show={status === 'error'}
                onClose={handleCloseError}
                onRetry={handleRetry}
                message={errorMsg}
            />
        </>
    );
}
