export function Title4({ txt, className }: { txt: string, className?: string }) {
    return (
        <h1 className={`${className} text-2xl text-wrap: balance tracking-tight`}>
            {txt}
        </h1>
    )
}