export function Title3({ txt, className }: { txt: string, className?: string }) {
    return (
        <h1 className={`${className} text-4xl text-wrap: balance tracking-tight text-left`}>
            {txt}
        </h1>
    )
}