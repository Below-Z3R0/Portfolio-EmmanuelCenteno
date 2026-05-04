export function Title4({ txt, className }: { txt: string, className?: string }) {
    return (
        <h1 className={`${className} text-xl text-wrap: balance tracking-tight text-left`}>
            {txt}
        </h1>
    )
}