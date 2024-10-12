import { getAllTasks } from "@/api/Tasks/get-all-tasks";
import { useQuery } from "@tanstack/react-query"

interface Props {
    auth: boolean;
}

export const useTasks = ({ auth }: Props) => {

    const { isLoading, isError, error, data: tasks = [], isFetching } = useQuery({
        queryKey: ['tasks'],
        queryFn: () => getAllTasks(),
        staleTime: 1000 * 60,
        enabled: auth
    });

    return {
        tasks,
        error,
        isLoading,
        isError, isFetching,
    }
}