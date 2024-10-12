import { getAllCampaign } from "@/api/Campain/get-all-campaign";
import { useQuery } from "@tanstack/react-query"

interface Props {
    auth: boolean;
    fetchCampaign: boolean;
}

export const useCampaign = ({ auth, fetchCampaign }: Props) => {

    const { isLoading, isError, error, data: campaign = [], isFetching } = useQuery({
        queryKey: ['campaign'],
        queryFn: () => getAllCampaign(),
        staleTime: 1000 * 60,
        enabled: auth && fetchCampaign
    });

    return {
        campaign,
        error,
        isLoading,
        isError, isFetching,
    }
}