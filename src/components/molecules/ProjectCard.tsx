import { Button, LinkButton, Title2, Title4, Paragraph, TecnologiesCard } from "../components"
import { useState } from "react";
import type { ProjectCardProps } from "../types"

export function ProjectCard({ metadata, translations }: ProjectCardProps) {
    const [activeTxt, setActivetxt] = useState(translations.txt)
    const handleReset = () => setActivetxt(translations.txt);
    const inConstruction = metadata.isInConstruction ? "opacity-65 cursor-not-allowed pointer-events-none" : ""
    return (
        <article className={`${metadata.imgproject !== undefined ? 'max-h-220' : 'qw:max-w-[47.9%] max-h-120'} qw:h-100 w-full h-auto rounded-xl flex qw:flex-row flex-col-reverse justify-between p-5 bg-card border border-border-subtle shadow-lg transition-all ${metadata.isInConstruction ? "hover:border-border-glow-warning" : "hover:border-border-glow"} `}>

            <div className={`${metadata.imgproject === undefined ? '' : 'qw:w-[50%] '} h-full w-full flex flex-col mt-3 qw:mt-0 items-start gap-1`}>

                {metadata.isrelevant && (
                    <Title4 className="w-40 h-10 rounded-xl flex justify-center items-center bg-accent-soft text-accent text-[10px] font-bold uppercase tracking-wider border border-border-glow"
                        txt="⭐ Proyecto destacado"
                    />
                )}

                {metadata.isInConstruction && (
                    <Title4 className="w-40 h-10 rounded-xl flex justify-center items-center bg-warning-soft text-warning text-[10px] font-bold uppercase tracking-wider border border-border-glow-warning"
                        txt="🚧 En Construcion"
                    />
                )}

                <Title2 txt={metadata.title} className="text-main mt-1" />

                <Paragraph className="h-full text-dim" txt={activeTxt} />

                <div className="flex flex-col gap-2 w-full">
                    {/* Links GitHub / Live Demo — ahora con underline + iconos */}
                    <div className="flex justify-start gap-3">
                        <LinkButton
                            className={`flex items-center gap-1.5 text-sm text-dim hover:text-accent underline underline-offset-4 decoration-border-subtle hover:decoration-accent transition-colors ${inConstruction}`}
                            txt="GitHub"
                            link={metadata.linkgithub}
                            svg={undefined}
                        />
                        <span className="text-border-subtle">·</span>
                        <LinkButton
                            className={`flex items-center gap-1.5 text-sm text-dim hover:text-accent underline underline-offset-4 decoration-border-subtle hover:decoration-accent transition-colors ${inConstruction}`}
                            txt="Live Demo"
                            link={metadata.linklivedemo}
                            svg={undefined}
                        />
                    </div>

                    <div className="w-full flex justify-between items-center gap-3" >
                        {/* Tech icons más grandes (size-10) con label visible */}
                        <div className="flex qw:gap-3 gap-4 items-center">
                            {translations.tecnologies.map((item, index) => (
                                <Button
                                    className={`size-10 cursor-pointer ${inConstruction} group relative`}
                                    onClick={() => setActivetxt(item.description)}
                                    key={index}
                                    aria-label={item.name}
                                >
                                    <TecnologiesCard
                                        cardSize="!rounded-none !bg-transparent !border-none !backdrop-blur-none !shadow-transparent !p-0 !hover:bg-transparent !h-10 !w-10 cursor-pointer"
                                        imgSize="!size-full !object-cover opacity-80 hover:opacity-100 transition-opacity"
                                        icon={item.icon}
                                        color={item.color}
                                    />
                                </Button>
                            ))}
                        </div>
                        {/* Return button — más claro, siempre visible */}
                        <Button
                            className={`cursor-pointer h-9 px-4 rounded-full bg-surface border border-border-subtle text-dim text-[11px] font-bold uppercase tracking-widest transition-all duration-300 hover:border-accent hover:text-accent hover:shadow-[0_0_15px_rgba(139,92,246,0.2)] ${inConstruction}`}
                            txt="↺ Reset"
                            onClick={handleReset}
                        />
                    </div>
                </div>
            </div>

            {metadata.imgproject &&
                <LinkButton
                    className={`qw:w-[47.9%] qw:h-full h-auto rounded-xl overflow-hidden border tracking-widest transition-all duration-300 hover:border-accent cursor-pointer${inConstruction}`}
                    link={metadata.linklivedemo}
                    img={metadata.imgproject}
                    classNameImg="object-cover"
                />
            }
        </article>
    )
}
