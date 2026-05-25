import { AboutMeSectionSchema, ContactSectionSchema, HeroSectionSchema, ProjectsSectionSchema, SkillsSectionSchema } from "../schema/schemasindex";
import { getContentData } from "./sections/content.service";


export const getGeneralData = async () => {
    const [herosection, skillssection, projectssection, aboutmesection, contactsection] = await Promise.all([
        getContentData("Hero", HeroSectionSchema),
        getContentData("Skills", SkillsSectionSchema),
        getContentData("Proyects", ProjectsSectionSchema),
        getContentData("AboutMe", AboutMeSectionSchema),
        getContentData("Contact", ContactSectionSchema),
    ])
    return { herosection, skillssection, projectssection, aboutmesection, contactsection };
};
