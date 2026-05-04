import { supabase } from '../supabaseClient';
import { SkillsSectionSchema } from '../../schema/schemasindex';

export const getSkillsData = async () => {
    const { data, error } = await supabase
    .from('general_data')
    .select('content')
    .eq('section_name', 'Skills')
    .single();
    if (error) {
        console.error("Error fetching Skills data:", error);
        throw error;
    }
    return SkillsSectionSchema.parse(data.content);
};