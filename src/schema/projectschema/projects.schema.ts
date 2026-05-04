import { z } from 'zod';
import { ICON_MAP } from '../../assets/IconsMap';
import { IMG_MAP } from '../../assets/ImgMap'

const TecnologieSchema = z.object({
    icon: z.string().transform((val) => {return ICON_MAP[val] || ICON_MAP["default"];}),
    name: z.string(),
    color: z.string(),
    description: z.string(),
});

const TecnologiesSchema = z.array(TecnologieSchema);

export const MetadataSchema = z.object({
    title: z.string(),
    imgproject: z.string().transform((val) => {return IMG_MAP[val ?? "default"] || IMG_MAP["default"]}).optional(),
    isrelevant: z.boolean().optional().default(false),
    isInConstruction: z.boolean().optional().default(false),
    linkgithub: z.string(),
    linklivedemo: z.string(),
});

export const LanguageSchema = z.object({
    txt: z.string(),
    tecnologies: TecnologiesSchema
});

const translationSchema = z.object({
    en:LanguageSchema,
    es: LanguageSchema
});

export const ProjectSchema = z.object({
    metadata: MetadataSchema,
    translations: translationSchema
});

export const ProjectsSchema = z.array(ProjectSchema)

export type Projects = z.infer<typeof ProjectsSchema>