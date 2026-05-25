import type z from 'zod';
import { supabase } from '../supabaseClient';

export const getContentData = async <Schema extends z.ZodSchema>(name: string, schema:Schema) => {
    const { data, error } = await supabase
    .from('general_data')
    .select('content')
    .eq('section_name', name)
    .single();
    if (error) {
        console.error(`Error fetching ${name} data:`, error);
        throw error;
    }
    return schema.parse(data.content);
};