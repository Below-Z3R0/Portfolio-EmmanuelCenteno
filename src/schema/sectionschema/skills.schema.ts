import { z } from 'zod'
import { ICON_MAP } from '../../assets/IconsMap';

const LanguageSchema1 = z.object({
    titlelg: z.string(),
    titlesm: z.string(),
    Paragraph: z.string()
});

const SkillSchema = z.object({
    name: z.string(),
    icon: z.string().transform((val) => {return ICON_MAP[val] || ICON_MAP['default'];}),
    color: z.string()
});

const SkillsSchema = z.object({
    Frontend: z.array(SkillSchema),
    Backend: z.array(SkillSchema),
    DevOps: z.array(SkillSchema)
});

export const SkillsSectionSchema = z.object({
    skills: SkillsSchema,
    en: LanguageSchema1,
    es: LanguageSchema1
});

// Types

export type SkillsSection = z.infer<typeof SkillsSchema>