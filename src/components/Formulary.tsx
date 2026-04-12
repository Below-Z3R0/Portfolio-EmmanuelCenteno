import { Button, Title4 } from ".."
import type { FormularyProps } from ".."

export function Formulary({ title, fields, className, classNamelabel, classNameinput, children }: FormularyProps) {
    return (
        <form className={`${className} rounded-3xl size-full flex flex-col p-[5%] bg-card border border-border-subtle items-start shadow-2xl`}>
            <Title4 txt={title} className="pb-[2%] text-main font-bold tracking-tight" />
            
            {fields.map((field) => (
                <label key={field.id} className={`${classNamelabel} w-full rounded-xl flex flex-col items-start mb-[2%] text-sm font-medium text-dim gap-2`}>
                    {field.label}
                    <input
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        className={`${classNameinput} w-full rounded-md flex p-[2%] bg-surface border border-border-subtle text-main placeholder:text-muted focus:border-accent outline-none transition-all`}
                    />
                </label>
            ))}
            
            {children}
            
            <div className="w-full">
                <Button 
                    txt="Enviar" 
                    className="w-7/12 p-[2%] mt-[3%] rounded-md bg-accent text-main font-bold hover:opacity-90 transition-opacity shadow-glow-v" 
                />
            </div>
        </form>
    )
}