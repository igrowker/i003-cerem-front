import { createTasks } from "@/api/Tasks/create-tasks";
import { deleteTasks } from "@/api/Tasks/delete-tasks";
import { putTasks } from "@/api/Tasks/put-tasks-by-id";
import { Tasks } from "@/types/Tasks/Tasks";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useTasksMutation = () => {
    const queryClient = useQueryClient();

    const addTasksMutation = useMutation({
        mutationFn: createTasks,
        onSuccess: (tasks, variables, context) => {
            queryClient.invalidateQueries({ queryKey: ['tasks'] });
            console.log("tasks created", tasks, variables, context);
        },

        onError: (error: any, variables, context) => {
            console.log("Error details:", error.response?.data || error.message, variables, context);
        },
    });

    const updateTasksMutation = useMutation({
        mutationFn: ({ id, tasks }: { id: number; tasks: Tasks }) => putTasks(id, tasks),
        onSuccess: (tasks, variables, context) => {
            queryClient.invalidateQueries({ queryKey: ['tasks', variables.id] });
            console.log("tasks updated", tasks, variables, context);
        },
        onError: (error, variables, context) => {
            console.log("Error updating client", error, variables, context);
        },
    });

    const deleteTasksMutation = useMutation({
        mutationFn: (id: number) => deleteTasks(id),
        onSuccess: (tasks, variables, context) => {
            queryClient.invalidateQueries({ queryKey: ['tasks'] })
            console.log("tasks deleted", tasks, variables, context);
        },
        onError: (error, variables, context) => {
            console.log("Error deleting tasks", error, variables, context);
        },
    });

    return { addTasksMutation, updateTasksMutation, deleteTasksMutation };
};
