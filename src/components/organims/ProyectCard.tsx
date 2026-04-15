import { Button, LinkButton, Title2, NormalPrght, TecnologiesCard } from "../../index"
import type { ProyectProps } from "../../index"

interface ProyectCardBigProps {
    data: ProyectProps;
}

export function ProyectCard({ data }: ProyectCardBigProps) {
    return (
        <div className={`${data.imgproyect !== null
            //Cuando tiene imagen
            ? 'max-h-220'
            //Cuando no tiene imagen
            : 'qw:max-w-[47.9%] max-h-120'} 
            qw:h-80 w-full h-auto rounded-xl flex qw:flex-row flex-col-reverse justify-between p-5 bg-card border border-border-subtle shadow-lg transition-all hover:border-border-glow`}>

            <div className={`${data.imgproyect === null ? '' : 'qw:w-[50%] '} h-full w-full flex flex-col mt-3 qw:mt-0 items-start gap-1`}>

                {data.isrelevant && (
                    <h6 className="w-50 h-6 rounded-2xl flex justify-center items-center bg-accent-soft text-accent text-[10px] font-bold uppercase tracking-wider border border-border-glow">
                        ⭐ Proyecto destacado
                    </h6>
                )}

                <Title2 txt={data.title} className="text-main" />

                <NormalPrght className="h-full text-dim" txt={data.txt} />

                <div className="flex flex-col gap-2 w-full">
                    <div className="flex justify-start gap-2">
                        <LinkButton className="flex items-center w-20 h-8 text-dim hover:text-main transition-colors" txt="GitHub" link={data.linkgithub} />
                        <LinkButton className="flex items-center w-20 h-8 text-dim hover:text-main transition-colors" txt="Live Demo" link={data.linklivedemo} />
                    </div>

                    <div className="w-full flex justify-between items-center" >
                        <div className="flex qw:gap-2 gap-4">
                            {data.tecnologies.map((item, index) => (
                                <TecnologiesCard key={index}
                                    cardSize="!rounded-none !bg-transparent !border-none !backdrop-blur-none !shadow-transparent !p-0 !hover:bg-transparent !h-6 !w-6 cursor-pointer"
                                    imgSize="!size-full !object-cover opacity-80 hover:opacity-100 transition-opacity"
                                    icon={item.icon}
                                    color={item.color}
                                />
                            ))}
                        </div>
                        <Button
                            className=" cursor-pointer qw:h-8 qw:w-20 h-10 w-24 rounded-full bg-surface border border-border-subtle text-dim text-[10px] font-bold uppercase tracking-widest transition-all duration-300 hover:border-accent hover:text-main hover:shadow-[0_0_15px_rgba(139,92,246,0.2)]"
                            txt="Return"
                        />
                    </div>
                </div>
            </div>

            {data.imgproyect &&
                <a className="qw:w-[40%] qw:h-full h-auto rounded-xl overflow-hidden border tracking-widest transition-all duration-300 hover:border-accent cursor-pointer" href={data.linklivedemo} target="_blank">
                    <img className="size-full object-cover" src={data.imgproyect} alt={data.title} />
                </a>
            }
        </div>
    )
}

//Todo
//Aplicar un grid para un dise;o mas responsive 