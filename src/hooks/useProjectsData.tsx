import { useQuery } from "@tanstack/react-query";
import { getProjectsData } from "../api/projectdata.service";
import type { Projects } from "../schema/projectschema/projects.schema";

export const useProjectsData = () => {
    const query = useQuery<Projects>({
        queryKey: ['projects-data'],
        queryFn: getProjectsData,
        staleTime: 1000 * 60 * 60
    })
    if (query.isError) {
        console.error("Error en useProjectsData:", query.error);
    }

    return {
        ProjectsData: query.data,
        isProjctsDataLoading: query.isLoading,
        isProjectsDataError: query.isError,
        ...query
    }
}