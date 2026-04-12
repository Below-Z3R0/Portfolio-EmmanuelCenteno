export function Title2({ txt, className }: { txt: string, className?: string }) {
    return (
        <h1 className={`${className} text-3xl text-wrap: balance tracking-tight`}>
            {txt}
        </h1>
    )
}