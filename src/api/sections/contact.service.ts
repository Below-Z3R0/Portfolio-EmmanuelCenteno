import { supabase } from '../supabaseClient';
import { ContactSectionSchema } from '../../schema/schemasindex';

export const getContactData = async () => {
    const { data, error } = await supabase
    .from('general_data')
    .select('content')
    .eq('section_name', 'Contact')
    .single();
    if (error) {
        console.error("Error fetching ontact data:", error);
        throw error;
    }
    return ContactSectionSchema.parse(data.content);
};