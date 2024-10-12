import axiosInstance from "@/services/axiosConfig";
import { Tasks } from "@/types/Tasks/Tasks";

export const completeTasks = async (id: number) => {
    try {
        const { data } = await axiosInstance.post<Tasks>(`/tareas/${id}/completar_tarea`);
        return data;
    } catch (error) {
        return error;
    }
}
