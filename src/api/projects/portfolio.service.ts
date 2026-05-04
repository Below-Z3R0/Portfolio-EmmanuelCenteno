import { supabase } from "../supabaseClient";
import { ProjectSchema } from "../../schema/projectschema/projects.schema";

export const getPortfolioData = async () => {
    const { data, error } = await supabase
    .from('projects')
    .select('content')
    .eq('project_name', 'Portfolio')
    .single()
    if(error) {
        console.error('Error fetching Porfolio data:', error)
        throw error;
    }
    return ProjectSchema.parse(data.content)
}