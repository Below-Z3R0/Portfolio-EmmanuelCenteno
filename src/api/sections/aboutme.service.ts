import { supabase } from '../supabaseClient';
import { AboutMeSectionSchema } from '../../schema/schemasindex'

export const getAboutMeData = async () => {
    const { data, error } = await supabase
    .from('general_data')
    .select('content')
    .eq('section_name', 'AboutMe')
    .single();
    if (error) {
        console.error("Error fetching AboutMe data:", error);
        throw error;
    }
    return AboutMeSectionSchema.parse(data.content);
};