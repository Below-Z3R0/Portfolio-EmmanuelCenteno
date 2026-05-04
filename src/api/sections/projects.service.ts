import { supabase } from '../supabaseClient';
import { ProjectsSectionSchema } from '../../schema/schemasindex';

export const getProjectsData = async () => {
    const { data, error } = await supabase
    .from('general_data')
    .select('content')
    .eq('section_name', 'Proyects')
    .single();
    if (error) {
        console.error("Error fetching Projects data:", error);
        throw error;
    }
    return ProjectsSectionSchema.parse(data.content);
};