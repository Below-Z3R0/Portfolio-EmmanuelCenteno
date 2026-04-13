export function NormalPrght({txt, className}: {txt: string, className?: string}) {
    return (
        < p className={`${className} text-left text-lg leading-relaxed`} >
            {txt}
        </p >
    )
}