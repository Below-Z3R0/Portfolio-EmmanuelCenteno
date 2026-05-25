import { ProjectSchema } from "../../schema/schemasindex";
import { supabase } from "../supabaseClient";

export const getProjetData = async (name: string) => {
  const { data, error } = await supabase
    .from('projects')
    .select('content')
    .eq('project_name', name)
    .single();

  if (error) {
    console.error(`Error fetching ${name} data:`, error);
    throw error;
  }

  return ProjectSchema.parse(data.content);
};