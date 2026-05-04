import { getAboutMeData } from "./sections/aboutme.service";
import { getContactData } from "./sections/contact.service";
import { getHeroData } from "./sections/hero.service";
import { getProjectsData } from "./sections/projects.service";
import { getSkillsData } from "./sections/skills.service";

export const getGeneralData = async () => {
    const [herosection, skillssection, projectssection, aboutmesection, contactsection] = await Promise.all([
        getHeroData(),
        getSkillsData(),
        getProjectsData(),
        getAboutMeData(),
        getContactData()
    ])
    return { herosection, skillssection, projectssection, aboutmesection, contactsection };
};
