import { z } from 'zod'
import { ICON_MAP } from '../../assets/IconsMap';

const MetaDataSchema = z.object({
    mail: z.string().transform((val) => {return ICON_MAP[val] || ICON_MAP['default'];}),
    linkedin: z.string().transform((val) => {return ICON_MAP[val] || ICON_MAP['default'];})
});

const LanguageSchema2 = z.object({
    contact: z.string(),
    linkedin: z.string(),
    Title: z.string(),
    Paragraph1: z.string(),
    Paragraph2: z.string(),
    workstatus: z.string()
});

const HeroSectionTranslationsSchema = z.object({
    en: LanguageSchema2,
    es: LanguageSchema2
});

export const HeroSectionSchema = z.object({
    metadata: MetaDataSchema,
    translations: HeroSectionTranslationsSchema
});

export type HeroSection = z.infer<typeof HeroSectionSchema>