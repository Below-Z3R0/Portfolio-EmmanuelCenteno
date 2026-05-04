import { z } from 'zod'

const LanguageSchema2 = z.object({
    titlelg: z.string(),
    titlesm: z.string(),
    Paragraph1: z.string(),
    Paragraph2: z.string()
});

export const AboutMeSectionSchema = z.object({
    en: LanguageSchema2,
    es: LanguageSchema2
});

// Types
export type AboutMeSection = z.infer<typeof AboutMeSectionSchema>