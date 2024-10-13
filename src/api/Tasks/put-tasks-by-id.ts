import axiosInstance from "@/services/axiosConfig";
import { Tasks } from "@/types/Tasks/Tasks";

export const putTasks = async (id: number, tasks: Tasks) => {
    try {
        const { data } = await axiosInstance.put<Tasks>(`/tareas/${id}`, tasks);
        return data;
    } catch (error) {
        return error;
    }
}
