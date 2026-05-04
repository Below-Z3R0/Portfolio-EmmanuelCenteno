import { Button, LinkButton, Title2, Title4, Paragraph, TecnologiesCard } from "../componentsindex"
import type { ProjectProps } from "../componentstypes"
import { useState } from "react";
 
export function ProjectCard({ metadata, translations }: ProjectProps) {
    const [activeTxt, setActivetxt] = useState(translations.txt)
    const handleReset = () => setActivetxt(translations.txt);
    const inConstruction = metadata.isInConstruction ? "opacity-65 cursor-not-allowed pointer-events-none" : ""
    return (
        <div className={`${metadata.imgproject !== undefined ? 'max-h-220' : 'qw:max-w-[47.9%] max-h-120'} qw:h-100 w-full h-auto rounded-xl flex qw:flex-row flex-col-reverse justify-between p-5 bg-card border border-border-subtle shadow-lg transition-all ${metadata.isInConstruction ? "hover:border-border-glow-warning" : "hover:border-border-glow"} `}>

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
                    <div className="flex justify-start gap-2">
                        <LinkButton className={`flex items-center w-20 h-8 text-dim hover:text-main transition-colors ${inConstruction}`} txt="GitHub" link={metadata.linkgithub} />
                        <LinkButton className={`flex items-center w-20 h-8 text-dim hover:text-main transition-colors ${inConstruction}`} txt="Live Demo" link={metadata.linklivedemo} />
                    </div>

                    <div className="w-full flex justify-between items-center" >
                        <div className="flex qw:gap-2 gap-4">
                            {translations.tecnologies.map((item, index) => (
                                <Button
                                    className={`size-fit cursor-pointer ${inConstruction}`} onClick={() => setActivetxt(activeTxt === translations.txt ? item.description || translations.txt : translations.txt)}
                                    key={index}
                                >
                                    <TecnologiesCard
                                        cardSize="!rounded-none !bg-transparent !border-none !backdrop-blur-none !shadow-transparent !p-0 !hover:bg-transparent !h-6 !w-6 cursor-pointer"
                                        imgSize="!size-full !object-cover opacity-80 hover:opacity-100 transition-opacity"
                                        icon={item.icon}
                                        color={item.color}
                                    />
                                </Button>
                            ))}
                        </div>
                        <Button
                            className={`cursor-pointer qw:h-8 qw:w-20 h-10 w-24 rounded-full bg-surface border border-border-subtle text-dim text-[10px] font-bold uppercase tracking-widest transition-all duration-300 hover:border-accent hover:text-main hover:shadow-[0_0_15px_rgba(139,92,246,0.2)] ${inConstruction}`}
                            txt="Return"
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
        </div>
    )
}

//Todo
//Aplicar un grid para un dise;o mas responsive 