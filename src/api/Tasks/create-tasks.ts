import axiosInstance from "@/services/axiosConfig";
import { Tasks } from "@/types/Tasks/Tasks";

export const createTasks = async (tasks: Tasks) => {
    try {
        const { data } = await axiosInstance.post<Tasks>(`/tareas/`, tasks);
        return data;
    } catch (error) {
        return error;
    }
}
