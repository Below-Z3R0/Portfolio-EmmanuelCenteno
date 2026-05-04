import { supabase } from "../supabaseClient";
import { ProjectSchema } from "../../schema/projectschema/projects.schema";

export const getNincyData = async () => {
    const {data, error} = await supabase
    .from('projects')
    .select('content')
    .eq('project_name', 'NINCY')
    .single()
    if(error) {
        console.error('Error fetching NINCY data:', error)
        throw error
    }
    return ProjectSchema.parse(data.content)
}