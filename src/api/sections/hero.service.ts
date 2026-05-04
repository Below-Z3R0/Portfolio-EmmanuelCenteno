import { supabase } from '../supabaseClient';
import { HeroSectionSchema } from '../../schema/schemasindex';

export const getHeroData = async () => {
    const { data, error } = await supabase
    .from('general_data')
    .select('content')
    .eq('section_name', 'Hero')
    .single();
    if (error) {
        console.error("Error fetching Hero data:", error);
        throw error;
    }
    return HeroSectionSchema.parse(data.content);
};