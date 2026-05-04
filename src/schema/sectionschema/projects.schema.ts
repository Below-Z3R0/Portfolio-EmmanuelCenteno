import { z } from 'zod'

const LanguageSchema1 = z.object({
    titlelg: z.string(),
    titlesm: z.string(),
    Paragraph: z.string()
})

export const ProjectsSectionSchema = z.object({
    en: LanguageSchema1,
    es: LanguageSchema1
})

// Types
export type ProyecsSection = z.infer<typeof ProjectsSectionSchema>