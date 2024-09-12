import { getAllClients } from "@/api/Clients/get-all-clients";
import { useQuery } from "@tanstack/react-query"

interface Props {
    auth: boolean;
    fetchClients: boolean;
}

export const useClients = ({ auth, fetchClients }: Props) => {

    const { isLoading, isError, error, data: clients = [], isFetching } = useQuery({
        queryKey: ['clients'],
        queryFn: () => getAllClients(),
        staleTime: 1000 * 60,
        enabled: auth && fetchClients
    });

    return {
        clients,
        error,
        isLoading,
        isError, isFetching,
    }
}