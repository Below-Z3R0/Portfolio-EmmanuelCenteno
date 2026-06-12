import { AboutMeSectionSchema, ContactSectionSchema, FooterSectionSchema, HeroSectionSchema, ProjectsSectionSchema, SkillsSectionSchema } from "../schema/schemasindex";
import { getContentData } from "./sections/content.service";


export const getGeneralData = async () => {
    const [herosection, skillssection, projectssection, aboutmesection, contactsection, footersection] = await Promise.all([
        getContentData("Hero", HeroSectionSchema),
        getContentData("Skills", SkillsSectionSchema),
        getContentData("Proyects", ProjectsSectionSchema),
        getContentData("AboutMe", AboutMeSectionSchema),
        getContentData("Contact", ContactSectionSchema),
        getContentData("Footer", FooterSectionSchema),
    ])
    return { herosection, skillssection, projectssection, aboutmesection, contactsection, footersection };
};
