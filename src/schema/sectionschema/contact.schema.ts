import { z } from 'zod'
import { ICON_MAP } from '../../assets/IconsMap';

const FieldSchema = z.object({
    name: z.string(),
    type: z.enum(["text", "email"], {error: "The types of the field must be 'text' or 'email'"}),
    label: z.string(),
    placeholder: z.string(),
});

const FormLanguageSchema = z.object({
    title: z.string(),
    top: z.array(FieldSchema),
    bottom: FieldSchema
});

const ContactSchema = z.object({
    img: z.string().transform((val) => {return ICON_MAP[val] || ICON_MAP["default"]}),
    txt: z.string(),
    link: z.string()
})

const ContactsSchema = z.array(ContactSchema)

const LanguageSchema1 = z.object({
    titlelg: z.string(),
    titlesm: z.string(),
    Paragraph: z.string()
});

export const ContactSectionSchema = z.object({
    Contacts: ContactsSchema,
    Form: z.object({
        en: FormLanguageSchema,
        es: FormLanguageSchema
    }),
    en: LanguageSchema1,
    es: LanguageSchema1,
});

// Types
export type ContactSection = z.infer<typeof ContactSectionSchema>;