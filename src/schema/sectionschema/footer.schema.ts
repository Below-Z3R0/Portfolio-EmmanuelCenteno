import { z } from 'zod'

const NavLinksSchema = z.object({
    about: z.string(),
    skills: z.string(),
    projects: z.string(),
    contact: z.string()
})

const LanguageSchema = z.object({
    builtWith: z.string(),
    copyright: z.string(),
    navLinks: NavLinksSchema
})

export const FooterSectionSchema = z.object({
    en: LanguageSchema,
    es: LanguageSchema
})

export type FooterSection = z.infer<typeof FooterSectionSchema>
