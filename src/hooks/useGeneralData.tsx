import { useQuery } from "@tanstack/react-query";
import { getGeneralData } from "../api/generaldata.service";

export const useGeneralData = () => {
    const query = useQuery({
        queryKey: ['general-data'],
        queryFn: getGeneralData,
        staleTime: 1000 * 60 * 60,
    });
    return {
        GeneralData: query.data,
        isGeneralDataLoading: query.isLoading,
        isGeneralDataError: query.isError,
        ...query
    };
}