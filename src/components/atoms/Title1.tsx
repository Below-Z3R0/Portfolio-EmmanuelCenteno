export function Title1({ txt, className }: { txt: string, className: string }) {
    return (
        <h1 className={`${className} text-5xl text-wrap: balance tracking-tight text-left`}>
            {txt}
        </h1>
    )
}